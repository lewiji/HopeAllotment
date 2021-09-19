module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.{js,jsx,ts,tsx,md,mdx}"],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: '1',
              fontSize: '1.6em',
            },
            h4: {
              marginTop: '1',
              fontWeight: '360'
            },
            blockquote: {
              quotes: "none",
              fontSize: "1.68em",
            }
          }
        }
      },
      backgroundOpacity: {
        90: "0.90",
        85: "0.85",
        80: "0.80",
      },
    },
  },
  important: true,
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require('tailwindcss-textshadow')],
}
