/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors:{
      'primay': '#2C7EF8',
      'primary-hover-light': '#075CD9',
      'on-primary-light':'#FFFFFF',
  
      'background-light': '#FEFEFE',
      'on-background-light':'#191C1E',
      'surface-light': '#FFFFFF',

      'background-dark': '#060C18',
      'dark-second-background':'#091120',
      'on-dark-text': '#FFFFFF',
      'on-background-light':'#E6E9EF',
      'surface-light': '#E6E9EF',
      'primary-hover-dark': '#6BA4FA',
      'primary-dark':'#3A86F8',


      'neutral_1': '#FFFFFF',
      'neutral_2': '#FEFEFE',
      'neutral_3': '#F5F6F8',
      'neutral_4': '#E1E0E5',
      'neutral_5': '#E1E0E5',
      'neutral_6': '#C8C7CB',
      'neutral_7': '#AFAEB2',
      'neutral_8': '#7D7D7F',
      'neutral_9': '#646466',
      'neutral_9': '#323233',
      'neutral_9': '#000000',

      'yellow': '#FFAF37',
      'red': '#FF5F37',
      'green': '#11A483',
      'dark-yellow-background': '#302F2D',
      'dark-red-background': '#3D2327',
      'dark-green-background': '#233332',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #EBF3FF -7.33%, #FFFFFF 76.21%)',

        'dark-custom-gradient': 'linear-gradient(180deg, rgba(2, 103, 255, 0.25) -25.32%, rgba(26, 32, 44, 0) 88.96%)',
      },
    },
  },
  plugins: [],
}
