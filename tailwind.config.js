/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "myGray":"#646681",
        "myBlue":"#646ff0",
        "myAsh":"#cccdde",
        "myBrown":"#585858",
        "myLightAsh":"#ecedf6",
        "myKhaki":"#dedfe1",
        "myLighKhaki":"#585858"
      }
    },
  },
  plugins: [],
}

