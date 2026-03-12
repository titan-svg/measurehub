import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          light: "#2E4A6F",
          dark: "#0E2A4F",
        },
        secondary: {
          DEFAULT: "#00B4D8",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        accent: {
          DEFAULT: "#FF6B35",
          light: "#FF8C5A",
          dark: "#E55A25",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)",
        "gradient-secondary": "linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)",
        "gradient-accent": "linear-gradient(90deg, #1E3A5F 0%, #00B4D8 100%)",
      },
      boxShadow: {
        "primary": "0 4px 14px 0 rgba(0, 180, 216, 0.39)",
        "accent": "0 4px 14px 0 rgba(255, 107, 53, 0.39)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
