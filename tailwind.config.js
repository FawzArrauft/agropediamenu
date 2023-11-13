/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Passion One', 'sans-serif'],
        display2: ['Road Rage', 'sans-serif'],
        buttontext: ['Jomhuria', 'serif'],
        keterangan: ['Silkscreen', 'sans-serif'],
        foodname: ['Timmana', 'sans-serif'],
        testingtext: ['Press Start 2P', 'sans-serif']
      },
      backgroundImage: {
        'darkpattern': "url(./assets/img/darkbackground.png)",
        'logogif' : "url(./assets/img/test.gif)",
        'sidedish1' : "url(./assets/img/gambarmenu/sidedish1.png)",
        'sidedish2' : "url(./assets/img/gambarmenu/sidedish2.png)",
        'maindish1' : "url(./assets/img/gambarmenu/maindish1.png)",
        'maindish2' : "url(./assets/img/gambarmenu/maindish2.png)",
        'maindish3' : "url(./assets/img/gambarmenu/maindish3.png)",
        'maindish4' : "url(./assets/img/gambarmenu/maindish4.png)",
        'maindish5' : "url(./assets/img/gambarmenu/taco.png)",
        'minuman' : "url(./assets/img/minuman.png)"
      },
    },
  },
  plugins: [],
}

