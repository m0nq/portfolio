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
        }
    },
    plugins: []
};

export default config;
