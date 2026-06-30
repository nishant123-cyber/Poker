export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'poker-green': '#0B5E40',
        'poker-dark': '#1a1a1a',
        'poker-light': '#f5f5f5',
      },
      animation: {
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'chip-drop': 'chipDrop 0.5s ease-out',
      },
      keyframes: {
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        chipDrop: {
          '0%': { transform: 'translateY(-20px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
