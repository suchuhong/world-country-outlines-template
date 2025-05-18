/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#0F3460', // 主色调
          700: '#0E2954',
          800: '#0C1E44',
          900: '#0A1836',
        },
        secondary: {
          50: '#E6F4F9',
          100: '#CCE9F4',
          200: '#99D3E9',
          300: '#66BDDE',
          400: '#3D84A8', // 辅助色
          500: '#337691',
          600: '#286275',
          700: '#1E4D5E',
          800: '#143642',
          900: '#0A1F26',
        },
        accent: {
          50: '#FFF5E6',
          100: '#FFEACC',
          200: '#FFD699',
          300: '#FFC166',
          400: '#FFAD33',
          500: '#FB8500', // 强调色
          600: '#CC6A00',
          700: '#995000',
          800: '#663500',
          900: '#331A00',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E2E8F0',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2D3748', // 中性深灰
          900: '#1A202C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'world-pattern': "url('/world-grid.svg')",
        'hero-gradient': 'linear-gradient(135deg, #0F3460 0%, #3D84A8 100%)',
      },
      boxShadow: {
        card: '0 4px 20px rgba(15, 52, 96, 0.1)',
        hover: '0 8px 30px rgba(15, 52, 96, 0.15)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
