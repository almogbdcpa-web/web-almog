import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-frank)', 'Georgia', 'serif'],
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          50: '#FAFAF8',
          100: '#F5F1EC',
          200: '#EDE8E0',
          300: '#E0D9D0',
          400: '#C5BDB3',
          500: '#ABA49A',
          600: '#857E74',
          700: '#5E584F',
          800: '#3A3630',
          900: '#1E1C18',
        },
      },
      letterSpacing: {
        widest: '0.25em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
