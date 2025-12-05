/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#121212',
                'charcoal-light': '#1E1E1E',
                neon: {
                    yellow: '#F4FF00', // New main color
                    blue: '#00F0FF',
                    purple: '#BC13FE',
                    green: '#39FF14'
                },
                glass: {
                    white: 'rgba(255, 255, 255, 0.1)',
                    dark: 'rgba(0, 0, 0, 0.3)',
                    border: 'rgba(255, 255, 255, 0.2)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}