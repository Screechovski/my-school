/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        borderRadius: {
            none: "0",
            small: "10px",
            medium: "20px",
            big: "30px",
            full: "50%"
        },
        borderWidth: {
            1: "1px",
            2: "2px"
        },
        extend: {
            boxShadow: {
                field: "0px 0px 0px 4px gray"
            },
            spacing: {
                0: "0px",
                small: "10px",
                medium: "20px",
                big: "30px",
                field: "50px",
                none: "0px"
            }
        }
    },
    plugins: []
};
