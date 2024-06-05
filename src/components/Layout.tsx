import React from 'react';

import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { useSiteQueryData } from '@hooks/use-site-query-data';
import { Contact } from '@components/contact/Contact';

export const Layout = ({ children }) => {
    const { site: { siteMetadata: { menuLinks } } } = useSiteQueryData();

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
