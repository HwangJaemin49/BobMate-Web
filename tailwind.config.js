/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'yellow-900': '#FE7A00',
      'yellow-800': '#FEA700',
      'yellow-700': '#FFC000',
      'yellow-600': '#FFD900',
      'yellow-500': '#FAE700',
      'yellow-400': '#FCEC3F',
      'yellow-300': '#FEF167',
      'yellow-200': '#FFF595',
      'yellow-100': '#FFF9C0',
      'yellow-50': '#FFFDE5',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      colors: {
        'grayscale-800': '#262626',
        'grayscale-700': '#434343',
        'grayscale-600': '#555555',
        'grayscale-500': '#7B7B7B',
        'grayscale-400': '#9D9D9D',
        'grayscale-300': '#C4C4C4',
        'grayscale-200': '#D9D9D9',
        'grayscale-100': '#E9E9E9',
        'grayscale-50': '#F5F5F5',
        background: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
