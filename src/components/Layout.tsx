import React from 'react';

import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { useSiteMetadata } from '@hooks/use-site-metadata';
import { Contact } from '@components/contact/Contact';

export const Layout = ({ children }) => {
    const { menuLinks } = useSiteMetadata();

    return (
        <>
            <div className="outer-wrapper">
                <div className="inner-container">
                    <Header menuLinks={menuLinks} />
                    {children}
                    <Footer />
                </div>
            </div>
            <Contact />
        </>
    );
};
