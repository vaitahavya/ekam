import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: "#C6A15B",
        background: "#F8F7F4",
        "text-primary": "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(17, 17, 17, 0.08)",
        card: "0 8px 32px rgba(17, 17, 17, 0.06)",
        glow: "0 0 24px rgba(198, 161, 91, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
