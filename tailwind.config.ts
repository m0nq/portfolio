import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        fontFamily: {
            sans: ['var(--quicksand-font-family)', ...defaultTheme.fontFamily.sans],
            body: ['var(--open-sans-font-family)', ...defaultTheme.fontFamily.sans]
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                'dark': '#181a1b',
                'primary': 'hotpink',
                'secondary': 'dodgerblue'
            }
        },
        animation: {
            'track-in': 'tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
            spin: 'spin 1s linear infinite'
        },
        keyframes: {
            'tracking-in-contract': {
                '0%': { 'letter-spacing': '0.5rem', opacity: '0' },
                '40%': { opacity: '0.6' },
                '100%': { 'letter-spacing': 'normal', opacity: '1' }
            },
            spin: {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' }
            }
        }
    },
    plugins: []
};

export default config;
