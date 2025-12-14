/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0a0f1a',      // Dark navy
          secondary: '#1e293b',    // Slate 800
          tertiary: '#0f172a'      // Slate 900
        },
        primary: {
            DEFAULT: '#3b82f6',
            foreground: '#ffffff'
        },
        subject: {
          biology: '#10b981',      // Emerald 500
          chemistry: '#f59e0b',    // Amber 500
          physics: '#3b82f6',      // Blue 500
          math: '#ef4444',         // Red 500
          english: '#a855f7'       // Purple 500
        },
        accent: {
          prediction: '#facc15',   // Yellow 400
        }
      },
      fontFamily: {
        sans: ['"Hind Siliguri"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
