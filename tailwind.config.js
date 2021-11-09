module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                title: "'Merriweather', serif",
                paragraph: "'Roboto', sans-serif",
            },
            colors: {
                dark: '#121212',
                ltgreen: '#9AA66D',
                dkblue: '#9BCAF2',
                dkgreen: '#426233',
                ltblue: '#C9DFF2',
                skin: '#734B3D',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
