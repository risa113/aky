/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0756a6",
        "primary-dark": "#063B73",
        "primary-deep": "#001f3f",
        "primary-container": "#003f7e",
        "on-primary-fixed": "#001b3d",
        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#a9c7ff",
        "tertiary": "#004b06",
        "tertiary-container": "#39A935",
        "tertiary-light": "#EAF7EA",
        "tertiary-fixed": "#8bfc7c",
        "surface": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f3ff",
        "surface-container": "#e9edff",
        "surface-container-high": "#e1e8ff",
        "surface-container-highest": "#d9e2fc",
        "on-surface": "#121b2e",
        "on-surface-variant": "#424751",
        "outline": "#727783",
        "outline-variant": "#c2c6d3",
        "gold-accent": "#e8a317",
        "gold-hover": "#d49411",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        headline: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
