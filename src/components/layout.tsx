import React from 'react';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { useSiteMetadata } from '@hooks/use-site-metadata';
import { Contact } from '@components/contact/Contact';

import styles from './layout.module.css';

export const Layout = ({ children }) => {
    const { menuLinks } = useSiteMetadata();

    return (
        <>
            <div className={styles ? styles.outerWrapper : 'outer-wrapper'}>
                <div className={styles ? styles.innerContaner : 'inner-container'}>
                    <Header menuLinks={menuLinks} />
                    {children}
                    <Footer />
                </div>
            </div>
            <Contact />
        </>
    );
};
