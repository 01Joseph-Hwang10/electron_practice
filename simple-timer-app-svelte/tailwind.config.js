// eslint-disable-next-line
const production = !process.env.DEBUG;

// eslint-disable-next-line
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
  theme: {
    colors: {
      base: "#1E3163",
      primary: "#2D46B9",
      secondary: "#F037A5",
      highlight: "#F8F8F8",
    },
  },
};
