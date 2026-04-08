/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['CustomFont', 'sans-serif'],
        'peach-brown': ['Peach Brown', 'sans-serif'],
      },
      colors: {
        'brown-sugar': '#8B4513',
        cream: '#faf8f5',
        'cream-warm': '#f5f2ed',
        'cream-section': '#f0ebe3',
        sage: '#5c6b5a',
        'sage-dark': '#3d4a3a',
        'sage-light': '#8a9a82',
        accent: '#a67c5b',
        'accent-soft': '#c4a77d',
        'theme-text': '#2d2a26',
        'theme-muted': '#5c574f',
        'theme-border': '#e8e4dc',
        'footer-bg': '#2d3630',
        'footer-text': '#f5f2ed',
      },
    },
  },
  plugins: [],
}
