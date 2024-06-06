import type { Metadata } from 'next';
import './globals.css';

import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { Contact } from '@components/contact/Contact';
import { type MenuLink } from '@data-types/menu-link.type';

const menuLinks: MenuLink[] = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'contact',
        link: '/contact'
    },
    {
        name: 'projects',
        link: '/projects'
    },
    {
        name: 'blog',
        link: '/blog'
    }
];

export const metadata: Metadata = {
    title: 'Monk Wellington',
    description: 'Monk Wellington is a software engineer based in the San Francisco Bay Area.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
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
}
