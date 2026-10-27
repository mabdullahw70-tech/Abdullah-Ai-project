import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#5B4FE9", dark: "#4638C9", soft: "#EEEDFD" },
        accent: { DEFAULT: "#FDA81B", soft: "#FFF1DC" },
        ink: "#1B1B2F",
        mist: "#F6F6F9",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
