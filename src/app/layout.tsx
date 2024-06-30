import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Quicksand } from 'next/font/google';
import DOMPurify from 'isomorphic-dompurify';

import './globals.css';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { menuLinks } from '@data-types/menu-link.type';
import { ContactProvider } from '@contexts/contact.context';
import { Contact } from '@components/contact/Contact';

const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--quicksand-font-family'
});

export const metadata: Metadata = {
    title: 'Monk Wellington',
    description: 'Monk Wellington is a front-end web developer based in the San Francisco Bay Area.'
};

DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // safely set all elements owning target to target=_blank
    // https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/
    if ('target' in node) {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener');
    }
});

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
    <html lang="en" className={`${quicksand.variable} font-sans`}>
        <body>
            <ContactProvider>
                <div className="outer-wrapper">
                    <div className="inner-container">
                        <Header menuLinks={menuLinks} />
                        <main className="main-wrapper">
                            <div className="outer-content-wrapper" data-testid="outer-content-wrapper">
                                <div className="inner-content-wrapper" data-testid="inner-content-wrapper">
                                    {children}
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                <Contact />
            </ContactProvider>
        </body>
    </html>
);

export default RootLayout;
