/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pastelHardPink: "#FF4E88",
        pastelSoftPink: "#FFEFEF",
        pastelPink: "#F3D0D7",
        pastelSecondary: "#F0EBE3",
        pastelLight: "#F6F5F2",
        pastelWhite: "#F6F5F2",
        pastelBlue: "#478CCF",
      },
      backgroundImage: {
        'head-background': "url('./src/assets/img/bg.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
