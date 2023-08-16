/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "25600px",
      },

      colors: {
        color1: "#26A4FF",
        color2: "#00C2FF",
        color3: "#00DAE8",
        color4: "#00EBBA",
        color5: "#9CF68B",
        color6: "#F9F871",
        color7: "#DAE6EE",
        color8: "#67737B",
        menuborder: "#9FD3F9",
        openTicket: "#E5FFFA",
        inProgressTicket: "",
        completedTicket: "#F2EBF6",
        pendingTicket: "#FFF6F2",
        inProgressText: "#E3E203",
        completedText: "#C37BF0",
        pendingTicket: "#FF723F",
      },
      boxShadow: {
        "card-shadow": "0px 3px 17px 0px rgba(0, 0, 0, 0.09)",
        "practice-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
        "documents-shadow": "0px 8px 18px 0px rgba(0, 0, 0, 0.04)",
        "modal-shadow": "0px 28px 24px 0px rgba(0, 0, 0, 0.20);",
        "button-shadow": "0px 4px 7px 0px rgba(0, 0, 0, 0.12);",
      },
      borderRadius: {
        round: "7px",
      },
    },
  },
  plugins: [],
};
