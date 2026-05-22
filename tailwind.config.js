
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1628',
          800: '#0F1C3F',
          700: '#1A2B56',
        },
        cobalt: {
          DEFAULT: '#1A6BFF',
          light: '#4D8DFF',
          dark: '#004BCC',
        },
        teal: {
          DEFAULT: '#00D4AA',
          light: '#33DDBB',
        },
        orange: {
          DEFAULT: '#FF6B35',
        },
        primary: '#0D1B3E',
        muted: '#5A6A8A',
        offwhite: '#F4F6FB',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
