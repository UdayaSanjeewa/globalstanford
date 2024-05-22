/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .5s infinite",
      },
    },
    fontFamily: {
      catamaran: ["Catamaran", "sans-serif"],
      nokora: ["Nokora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      merriweather: ["Merriweather Sans", "sans-serif"],
      sans: ['ui-sans-serif', 'system-ui',"sans-serif","Apple Color Emoji","Segoe UI Emoji",],
      serif: [' ui-serif', 'Georgia',"Cambria","Times New Roman","Times","serif"],
      mono: ['ui-monospace', 'SFMono-Regular'],
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      
    },
  },
  plugins: [],
};
