/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "var(--primary-color)",
                secondaryColor: "var(--secondary-color)",
                bgColor: "var(--bg-color)",
                textColor: "var(--text-color)",
                borderColor: "var(--border-color)",
            },
            boxShadow:{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            },
            borderWidth: {
                "1.5": "1.5px"
            }
        },
    },
    plugins: [],
}