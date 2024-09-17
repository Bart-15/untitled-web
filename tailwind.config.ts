import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: '400',
        medium: '500',
        'semi-bold': '600',
        bold: '700',
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        md: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.875rem',
          },
        ],
        'display-xs': [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        'display-sm': [
          '1.875rem',
          {
            lineHeight: '2.375rem',
          },
        ],
        'display-md': [
          '2.25rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '-2%',
          },
        ],
        'display-lg': [
          '3rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '-2%',
          },
        ],
        'display-xl': [
          '3.75rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-2%',
          },
        ],
        'display-2xl': [
          '4.5rem',
          {
            lineHeight: '5.625rem',
            letterSpacing: '-2%',
          },
        ],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      colors: {
        secondary: '#F9FAFB',
        borderPrimary: '#D0D5DD',
        tertiary: '#475467',
        'tertiary-900': '#101828',
        'tertiary-600': '#475467',
        'brand-secondary-700': '#6941C6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
