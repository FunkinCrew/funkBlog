/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('postcss-import')({
            path: ['styles/']
        }),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}

module.exports = config