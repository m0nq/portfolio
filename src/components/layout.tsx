import React from 'react';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { useSiteMetadata } from '@hooks/use-site-metadata';

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
        </>
    );
};
