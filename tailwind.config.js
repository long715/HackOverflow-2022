/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}", "./component/**/*.{jsx}"],
    theme: {
        extend: {
          colors: {
            'linen': '#faf0e6',
            'antique white':'#faebd7',
            'champagne':'#f7e7ce',
            'cosmiclatte':'#fff8e7',
            'bisque':'#ffe4c4',
            'cream':'#fffdd0',
            'ecru':'#cdb891',
            'khaki':'#c3b091'
          },
        },
    },
    plugins: [],
}