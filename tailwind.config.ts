// tailwind.config.ts
import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B4A4A", // Deep teal - main brand color
          dark: "#083838", // Darker teal for hover states
          light: "#0D5C5C", // Lighter teal for accents
        },
        // Override Relume background tokens with brand colors
        background: {
          primary: "#FFFFFF", // White backgrounds
          secondary: "#0B4A4A", // Teal backgrounds (brand primary)
          alternative: "#0B4A4A", // Teal for dark sections
        },
        // Override Relume border tokens
        border: {
          primary: "rgba(11, 74, 74, 0.1)", // Subtle teal border
        },
      },
    },
  },
};
export default config;
