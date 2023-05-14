/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wave-pattern': 'url(../assets/img/wave-white.png)',
        'wave-pattern-dots': "url('../assets/img/pattern-white-dots.png')",
        'pattern-characters-blue': "url('../assets/img/pattern-characters-blue.png')",
        'character-mario': "url('../assets/img/character-l.svg')",
        'wave-pink': "url('../assets/img/wave-pink.png')",
        'yellow-dots': "url('../assets/img/pattern-yellow-dots.png')",
      },
      screens: {
        'xsm' : '320px',
      }
    },
  },
  plugins: [],
}
