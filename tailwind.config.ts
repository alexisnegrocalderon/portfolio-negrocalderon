import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modo Elegante
        beige: {
          50: '#FEFBF7',
          100: '#FBF5ED',
          200: '#F5EBE0',
          300: '#E8DCC8',
          400: '#D4C4B0',
        },
        'verde-salvia': '#9CAF88',
        'terracota-suave': '#D4A574',
        'terracota-intenso': '#B8860B',
        
        // Modo Salvaje
        'naranja-vibrante': '#FF8C42',
        'rojo-vivo': '#E63946',
        'cobre-metalico': '#B87333',
        'oro-salvaje': '#FFD700',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184, 134, 11, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(184, 134, 11, 0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
