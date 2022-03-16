module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.md" ],
  theme: {
    inset: {
      0: 0,
      2: "2rem",
    },
    extend: {
      // backgroundImage: theme => ({
      //   swoop: "url('/images/swoop.png')",
      //   lines: "url('/images/lines.png')",
      // }),
      width: {
        fit: "fit-content",
        7: "7rem",
        30: "30rem",
        max: "max-content",
      },
      height: {
        30: "30rem",
        fit: "fit-content",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      margin: {
        "-16": "-16rem",
      },
    },
    minHeight: {
      850: "850px",
    },
    maxHeight: {
      1200: "1200px",
      394: "394px",
      1000: "1000px",
    },
    maxWidth: {
      1200: "1200px",
      800: "800px",
      450: "450px",
    },
    minWidth: {
      300: "300px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1441px",
    },
    fontFamily: {
      display: ["tablet-gothic-condensed", "sans-serif"],
      body: ["tablet-gothic", "sans-serif"],
      mono: ["roboto-mono", "monospace"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: ["1.125rem", "1.8rem"],
      xl: ["1.25rem", "1.8rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.4rem"],
      "4xl": ["2.25rem", "2.25rem"],
      "5xl": ["3rem", "3rem"],
      "6xl": ["4rem", "4rem"],
      "7xl": ["5rem", "4rem"],
      "8xl": ["6rem", "5rem"],
      "9xl": ["7rem", "6rem"],
      "10xl": ["10rem", "9rem"],
      "11xl": ["11rem", "10rem"],
      "12xl": ["12rem", "11rem"],
      "13xl": ["13rem", "12rem"],
      "14xl": ["14rem", "13rem"],
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },
    colors: {
      red: "#dd2d0e",
      pink: "#FAE5E5",
      yellow: "#ffe708",
      black: "#000000",
      beige: "#F9F8F6",
      white: "#ffffff",
      coral: "#EA5C42",
      lightgray: "#f1f2f6",
      pinktrans: "rgba(249,229,229, 0.95)",
      yellowtrans: "rgba(255,231,10,0.2)",
      whitetrans: "rgba(255,255,255,0.1)",
      blacktrans: "rgba(0,0,0,0.1)",
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
