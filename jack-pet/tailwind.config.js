/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        'purple': '#362F78',
        'pet': '#1B171E',
        'ash': '#7D8494',
        'red-btn':'#D5392E',
        'ash-box':'#7D8494',
        'dark-nav':'#100F0F',
        'light-nav' :'#2D2727'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/HeroSection.png')",
        'hero-tab': "url('/img/Herotab.png')",
        'hero-mobile': "url('/img/Heromobile.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       },
       height:{
        'screen':'90vh'
       },
       fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

