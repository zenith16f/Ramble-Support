import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      medium: "960px",
      mid: "1180px",
      large: "1400px",
      ...defaultTheme.screens,
    },
    extend: {
      borderRadius: {
        mid: "50%",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
        "6": "6 6 0%",
        "7": "7 7 0%",
        "8": "8 8 0%",
        "9": "9 9 0%",
      },
      colors: {
        beige: {
          900: "#F5E2DB",
          800: "#F3E3DD",
          700: "#F1E4DF",
          600: "#F0E4E0",
          500: "#EEE5E2",
        },
        coffee: {
          900: "#0B1023",
          800: "#180c06",
          750: "#2A1D17",
          700: "#27140A",
          600: "#371C0E",
          500: "#472312",
        },
        greenBlue: {
          900: "#1E5367",
          800: "#225F76",
          700: "#276B85",
          650: "#2B7895",
          600: "#2B7794",
          500: "#3084A4",
        },
        navyBlue: {
          900: "#0B1023",
          800: "#101732",
          700: "#141e41",
          600: "#192450",
          500: "#1E2B5F",
        },
        aquamarine: {
          900: "#ACE7D9",
          800: "#BBEBE0",
          700: "#B7E6DB",
          600: "#D4F4EE",
          500: "#E9F9F5",
        },
      },
      fontFamily: {
        body: ["Sen", "sans-serif"],
        header: ["Artifika", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
