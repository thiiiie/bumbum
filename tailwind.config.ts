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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        card: {
          background: "var(--card-background)",
          foreground: "var(--card-foreground)",
        },
        "scratch-card": {
          background: "var(--scratch-card-background)",
          foreground: "var(--scratch-card-foreground)",
          border: "var(--scratch-card-border)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
