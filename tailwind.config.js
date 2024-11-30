/** @type {import('tailwindcss').Config} */
export default {
    content: ["./**/*.html"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          outfit: ["Outfit", "sans-serif"],
          manrope: ["Manrope", "sans-serif"],
          lexend: ["Lexend", "sans-serif"],
          sourceSans: [`"Source Sans 3"`, "sans-serif"],
          JakartaSans: [`"Plus Jakarta Sans"`, "sans-serif"],
        },
      },
      screens: {
        "3xl": { max: "4035px" },
        // => @media (max-width: 4035px) { ... }
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1025px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  };
