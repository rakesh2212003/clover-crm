/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bgColor: 'var(--bgColor)',
                textColor: 'var(--textColor)',
                borderColor: 'var(--borderColor)',
                iconColor: 'var(--iconColor)',
                bgIcon: 'var(--bgIcon)',
            },
        },
    },
    plugins: [],
}
