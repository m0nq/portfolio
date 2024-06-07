'use client';
import { useEffect } from 'react';
import { Quicksand } from 'next/font/google';
import type { Metadata } from 'next';

const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--quicksand-font-family'
});

export const metadata: Metadata = {
    title: 'Monk Wellington',
    description: 'Monk Wellington is a front-end web developer based in the San Francisco Bay Area.'
};

const GlobalError = ({ error, reset }: { error: Error, reset: () => void }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html lang="en" className={`${quicksand.variable} font-sans`}>
            <body>
                <div>
                    <h2>Something went wrong!</h2>
                    <button onClick={() => reset()}>↩ Something went wrong. Try again?</button>
                </div>
            </body>
        </html>
    );
};

export default GlobalError;
