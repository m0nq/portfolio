import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ReactElement } from 'react';

import './globals.css';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { menuLinks } from '@data-types/menu-link.type';
import { ContactProvider } from '@contexts/contact.context';
import { Contact } from '@components/contact/contact';
import { quicksand } from '@utils/fonts';
import { openSans } from '@utils/fonts';
import HashNavigation from '@components/utils/hash-navigation';

export const metadata: Metadata = {
    title: 'Monk Wellington',
    description: 'Monk Wellington is a front-end web developer based in the San Francisco Bay Area.'
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>): Promise<ReactElement> => (
    <html lang="en">
        <body className={`${quicksand.variable} ${openSans.variable} font-sans`}>
            <ContactProvider>
                <HashNavigation>
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
                </HashNavigation>
            </ContactProvider>
        </body>
    </html>
);

export default RootLayout;
