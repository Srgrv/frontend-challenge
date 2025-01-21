const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          xs: "320px", // Самый маленький размер
          sm: "400px", // Новый брейкпоинт
          // "sm-md": "480px", // Промежуточный брейкпоинт
          md: "640px", // Далее стандартные брейкпоинты
          // "md-lg": "768px", // Промежуточный брейкпоинт
          lg: "1024px",
          // "lg-xl": "1200px", // Промежуточный брейкпоинт
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const baseFontSize = 16;
      const pxToRem = (px) => `${px / baseFontSize}rem`;
      // Генерируем массив значений от 1 до 100
      const pixelValues = Array.from({ length: 100 }, (_, i) => i + 1);
      const newUtilities = {};
      pixelValues.forEach((px) => {
        // Генерация для font-size
        newUtilities[`.text-${px}px`] = { fontSize: pxToRem(px) };
        // Генерация для padding
        newUtilities[`.p-${px}px`] = { padding: pxToRem(px) };
        // Генерация для margin
        newUtilities[`.m-${px}px`] = { margin: pxToRem(px) };
      });
      // Генерация для top, right, bottom, left
      newUtilities[`.top-${px}px`] = { top: pxToRem(px) };
      newUtilities[`.right-${px}px`] = { right: pxToRem(px) };
      newUtilities[`.bottom-${px}px`] = { bottom: pxToRem(px) };
      newUtilities[`.left-${px}px`] = { left: pxToRem(px) };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
