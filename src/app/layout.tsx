import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { Contact } from '@components/contact/Contact';
import { menuLinks } from '@data-types/menu-link.type';

export const metadata: Metadata = {
    title: 'Monk Wellington',
    description: 'Monk Wellington is a software engineer based in the San Francisco Bay Area.'
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode; }>) => (
    <html lang="en">
        <body>
            <div className="outer-wrapper">
                <div className="inner-container">
                    <Header menuLinks={menuLinks} />
                    {children}
                    <Footer />
                </div>
            </div>
            <Contact />
        </body>
    </html>
);
export default RootLayout;
