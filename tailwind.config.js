import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode:'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary:"#4263eb",
                secondary:"#63e6be"
            },
            container:{
                center:true,
                padding:{
                    DEFAULT:'1rem',
                    sm:'3rem'
                }
            }
        },
    },
// darkMode:"selector",
    plugins: [forms],
};
