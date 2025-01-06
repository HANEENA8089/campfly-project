// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/pages/Landing.{jsx}'
//   ],
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'purple': '#3f3cbb',
//       'midnight': '#121063',
//       'metal': '#565584',
//       'tahiti': '#3ab7bf',
//       'silver': '#ecebff',
//       'bubble': '#003DFC',
//       'bluee': '#3252DF',
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
     "./public/index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'inputbg': '#F5F6F8',
      'bubble': '#152C5B',
      'bluee': '#3252DF',
      'spblue': '#003DFC',
      'tickgreen':'#1ABC9C',
      'red':'#E74C3C',
      'greey':'#EAF1FF',
      'greene':'#0CE244',
      'greene1':'#0B822A',
      'grey':'#707070',
      'green2':'#14D344',
      'green3':'#0B822A',
      'purple1':'#E20CC5',
      'purple2':'#A00F75',
      'bg':'#0B822A1C',
      'p2':'#C8B89E',
      'p21':'#6A4D3B',
      'p3':'#0E5332',
      'p31':'#1E2E29',
      'grey1':'#DBDBDB',
      'grey2':'#8E8E8E',
      'mustard':'#FFBD12'
     

    },
    fontFamily:{
      arial: ['Arial', 'sans-serif'],
    }
  },
  plugins: [],
};

