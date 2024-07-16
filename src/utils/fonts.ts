import { Quicksand } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--quicksand-font-family'
});

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--open-sans-font-family'
});

