/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'wtf-hot': '#E21B79',
        'wtf-space': '#1C1F2A',
        'wtf-space-dark': '#030611',
        'wtf-space-light': '#474952',
        'off-white': '#F2F2F2',
        'off-white-dark': '#DCDCDC',
        'white': '#FFFFFF',
        'wtf-cold': '#2DCCD3',
        'wtf-hot-light': '#F57EB6',
        'wtf-cold-dark': '#009CA6',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(wtf-hot|wtf-space|wtf-space-dark|wtf-space-light|off-white|off-white-dark|white|wtf-cold|wtf-hot-light|wtf-cold-dark)/,
    },
  ],
};
