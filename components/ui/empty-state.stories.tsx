import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { EmptyState } from './empty-state';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    title: 'Sin movimientos aún',
    description: 'No hay operaciones que coincidan, o aún no hay actividad en tu cuenta. ¡Comienza depositando!',
    illustration: 'history',
    primaryAction: {
      label: 'Agregar fondos',
      href: '/anadir',
    },
    variant: 'full',
  },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const HistoryFull: Story = {
  args: {
    illustration: 'history',
    title: 'Sin movimientos aún',
    description: 'Aquí aparecerán tus depósitos, rendimientos y retiros una vez que comiences a operar.',
    primaryAction: {
      label: 'Agregar fondos',
      href: '/anadir',
    },
    secondaryAction: {
      label: 'Volver al inicio',
      href: '/dashboard',
    },
    variant: 'full',
  },
};

export const DashboardCompact: Story = {
  args: {
    illustration: 'cycle',
    title: 'Tu capital está listo para empezar a trabajar',
    description: 'Abre tu primer ciclo de rendimiento en pesos invirtiendo en CETES de manera segura.',
    primaryAction: {
      label: 'Agregar fondos',
      href: '/anadir',
    },
    variant: 'compact',
  },
};

export const WithdrawNoBalance: Story = {
  args: {
    illustration: 'balance',
    title: 'Sin saldo disponible',
    description: 'No tienes fondos disponibles en tu cuenta para realizar un retiro SPEI en este momento.',
    primaryAction: {
      label: 'Agregar fondos',
      href: '/anadir',
    },
    variant: 'full',
  },
};

export const AdvanceAlreadyUsed: Story = {
  args: {
    illustration: 'balance',
    title: 'Ya utilizaste tu adelanto',
    description: 'Tu liquidez está activa y trabajando. Podrás solicitar uno nuevo en tu siguiente ciclo.',
    primaryAction: {
      label: 'Volver al inicio',
      href: '/dashboard',
    },
    secondaryAction: {
      label: 'Ver tus adelantos',
      href: '/adelantos',
    },
    variant: 'full',
  },
};
