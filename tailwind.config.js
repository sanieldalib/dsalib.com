module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      102: "1.02",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    extend: {
      colors: {
        "shadow-black": "#121212",
      },
      minHeight: {
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "100vh",
      },
      maxHeight: {
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "calc(100vh - 72px)",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
};
