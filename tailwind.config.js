/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#dcf2e9',
          200: '#b9e5d3',
          300: '#86d1b8',
          400: '#4db595',
          500: '#2E7D5F',
          600: '#256a4f',
          700: '#1f5641',
          800: '#1a4636',
          900: '#163a2e',
        },
        background: {
          primary: '#FAFAFA',
          secondary: '#f5f5f5',
          dark: '#1F1F1F',
        },
        text: {
          primary: '#1F1F1F',
          secondary: '#4a4a4a',
          light: '#6b7280',
          white: '#ffffff',
        }
      },
      fontFamily: {
        'sans': ['Merriweather', 'Georgia', 'serif'],
        'display': ['Raleway', 'system-ui', 'sans-serif'],
        'subtitle': ['Josefin Sans', 'system-ui', 'sans-serif'],
        'button': ['Poppins', 'Raleway', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
} 