import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        mid: "50%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
