import { NextResponse } from 'next/server'
import { toErrorResponse } from '@/lib/seyf/api-error'
import { resolveEtherfuseRampContext } from '@/lib/seyf/etherfuse-ramp-context'
import { fetchUserMovements } from '@/lib/seyf/user-movements'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(req: Request) {
  try {
    const wallet = new URL(req.url).searchParams.get('wallet')?.trim() ?? ''
    const ctx = await resolveEtherfuseRampContext({
      walletPublicKeyHint: wallet.length > 0 ? wallet : null,
    })
    const movements = await fetchUserMovements(ctx ? { customerId: ctx.customerId } : null)
    return NextResponse.json({ movements }, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    })
  } catch (e) {
    return toErrorResponse(e, 'user-movements')
  }
}
