import { NextResponse } from 'next/server'
import { toErrorResponse } from '@/lib/seyf/api-error'
import { getEtherfuseRampContext } from '@/lib/seyf/etherfuse-ramp-context'
import { fetchUserMovements } from '@/lib/seyf/user-movements'
import { findRampContextFromOrgWallets } from '@/lib/etherfuse/customer-lookup'
import { isValidStellarPublicKey, normalizeStellarPublicKey } from '@/lib/etherfuse/stellar-public-key'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(req: Request) {
  try {
    const sessionCtx = await getEtherfuseRampContext()
    const fromQuery = new URL(req.url).searchParams.get('wallet')?.trim() ?? ''
    const walletQuery = fromQuery ? normalizeStellarPublicKey(fromQuery) : ''
    const canLookupByWallet = walletQuery && isValidStellarPublicKey(walletQuery)

    let customerId: string | null = sessionCtx?.customerId ?? null

    // En Vercel la cookie de /identidad puede faltar; intentamos resolver customerId por wallet.
    if (!customerId && canLookupByWallet) {
      try {
        const found = await findRampContextFromOrgWallets(walletQuery)
        if (found?.customerId) {
          customerId = found.customerId
        }
      } catch {
        // Sin lookup: devolveremos lo disponible (p. ej. Stellar chain), sin romper historial.
      }
    }

    const movements = await fetchUserMovements(customerId ? { customerId } : null)
    return NextResponse.json({ movements }, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    })
  } catch (e) {
    return toErrorResponse(e, 'user-movements')
  }
}
