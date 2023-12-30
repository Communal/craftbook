/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./src/**/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./src/**/**/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./src/**/**/**/**/*.{html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "product-primary": "#FF6D3F",
        "product-primary-light": "#FF9877",
        "product-primary-dimmed": "#FF480E",
        "product-secondary": "#3F80FF",
        "product-secondary-light": "#75A4FF",
        "product-secondary-dimmed": "#256FFF",
        "product-light": "#FFFFFF",
        "product-light-dimmed": "#FCFCFC",
        "activity-red": "#FF4545",
        "activity-red-light": "#FF8181",
        "activity-red-dimmed": "#DD1818",
        "product-dark": "#2F2F2F",
      }
    },
  },
  plugins: [],
}