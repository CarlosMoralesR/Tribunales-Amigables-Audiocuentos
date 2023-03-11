module.exports = {
  plugins: {
    tailwindcss: {
      content: ["./index.hmtl", "./src/**/*.{html,js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
};
