/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bgColor: "var(--bg-color)",
                cardColor: "var(--card-color)",
                textColor: "var(--text-color)"
            }
        }
    },
    plugins: [],
}