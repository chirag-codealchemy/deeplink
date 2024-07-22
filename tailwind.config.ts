import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      listStyleImage: {
        dot: 'url("/images/dot.png")',
        check: 'url("/images/check.png")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), daisyui],
  daisyui: {
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          "primary-content": "#f3f4f6",
          secondary: "#0ea5e9",
          "secondary-content": "#f3f4f6",
          accent: "#111827",
          "accent-content": "#f5f5f4",
          neutral: "#f3f4f6",
          "neutral-content": "#c4c5c4",
          "base-100": "#fffdff",
          "base-200": "#dedcde",
          "base-300": "#bebcbe",
          "base-content": "#161616",
          info: "#0089ff",
          "info-content": "#f3f4f6",
          success: "#00d27b",
          "success-content": "#f3f4f6",
          warning: "#ffac00",
          "warning-content": "#f3f4f6",
          error: "#ff003e",
          "error-content": "#f3f4f6",
        },
      },
    ],
  },
};
export default config;
