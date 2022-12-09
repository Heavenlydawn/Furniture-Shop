/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#E89F71",
        gray: "#D8D8D8",
        lightGray: "#616161",
        darkGray: "#3A3A3A",
        lightBg: "#F4F5F7"
      },
      spacing: {
        "1.6": "0.375rem",
        "2.5": "0.625rem",
        "2.6": "0.6875rem",
        "2.7": "0.8125rem",
        "2.8": "0.92rem",
        "3.1": "0.875rem",
        "21": "5.25rem",
        "23": "5.755rem",
        "22": "5.81rem",
        "25": "6.25rem"
      },
      gap: {
        "1.5": "0.3125rem",
        "13": "3.75rem"
      },
      maxWidth: {
        small: "249px",
        account: "113px",
        menu: "128px",
        connect: "225px"
      }
    },
  },
  plugins: [],
  
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}
