import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        primary: {
          100: '#dae9fb',
          200: '#b6d2f8',
          300: '#91bcf4',
          400: '#6da5f1',
          500: '#488fed',
          600: '#3a72be',
          700: '#2b568e',
          800: '#1d395f',
          900: '#0e1d2f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
