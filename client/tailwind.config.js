/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include your React files
    './node_modules/flowbite/**/*.js', // Include Flowbite's JavaScript
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to top, rgba(13, 13, 13, 1) 0%, rgba(50, 115, 185, 1) 100%)',
        'card-gradient':
          'radial-gradient(at top right, rgba(13, 13, 13, 1) 0%, rgba(34, 85, 180, 1) 100%)',
      },

      fontFamily: {
        inter: ['inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'inter'],
      },
      colors: {
        buttonPurple: 'rgba(98, 38, 239, 0.2)',
        buttonOrange: 'rgba(239, 56, 38, 0.2)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'), // Enable Flowbite plugin
  ],
};
