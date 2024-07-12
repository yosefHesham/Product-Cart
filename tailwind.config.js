/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: " #1D364D",
        productSubTitle:"#B9BBBF",
        featureSubtitle:"#726C6C",
        buttonBg:"#F3F3F3",
        activeTab:"#164C96",
        tab:"#98A2B3",
        tabContentPrimary:"#344054",
        tabContentSecondary:"#667085",
        checkout:"#3A4980",
        iconBg:"#EDF0F8",
        iconBgSecondary:"#FFF0F0",
        customRed:"#D75951",
        customLightRed:"#D46F77"

      }
    },
  },
  plugins: [],
}
