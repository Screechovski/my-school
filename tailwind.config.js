/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        borderRadius: {
            none: "0",
            small: "10px",
            medium: "20px",
            big: "30px"
        },
        colors: {
            body: "#e9eeff",
            white: "#ffffff",
            layoutBg: "#f9f9f9",
            layout: "#ececec",
            redPlaceholder: "#ffcccc",
            red: "#ff2b2b",
            text: "#303030",
            link: "#0059FF"
        },
        spacing: {
            small: "10px",
            medium: "20px",
            big: "30px"
        },
        extend: {}
    },
    plugins: []
};
