import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        brand: '#2563EB',
        mint: '#10B981',
        paper: '#F8FAFC',
      },
      fontFamily: {
        sans: [
          'Inter',
          'HarmonyOS Sans',
          'PingFang SC',
          'Microsoft YaHei',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 24, 39, 0.10)',
        glow: '0 18px 50px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
} satisfies Config;
