/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    container: {
      screens: {
        "xl": "1440px",
      },
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        xs: "375px",
        xl: "1440px"
      },
      colors: {
        "primary-dark-cyan": "hsl(var(--clr-primary-dark-cyan))",
        neutral: {
          "light-grayish-cyan": {
            background: "hsl(var(--clr-neutral-light-grayish-cyan-background))",
            "filter-tablets": "hsl(var(--clr-neutral-light-grayish-cyan-filter-tablets))"
          },
          "dark-grayish-cyan": "hsl(var(--clr-neutral-dark-grayish-cyan))",
          "darkest-grayish-cyan": "hsl(var(--clr-neutral-darkest-grayish-cyan))"
        }
      },

      fontFamily: {
        "league": "var(--font-family)"
      }
    },
  },
  plugins: [],
};
