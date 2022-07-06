module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 4px 12px 0px,rgba(255, 255, 255, 0.5) 0px 4px 12px 0px',
      }
    }
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
