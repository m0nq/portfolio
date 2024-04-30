import React from 'react';
import { ReactElement } from 'react';
import { useSiteMetadata } from '@hooks/use-site-metadata';

export const Footer = (): ReactElement => {
    const { author } = useSiteMetadata();

    return (
        <footer>
            <div>@ {new Date().getFullYear()} by <a href="https://github.com/m0nq" target="_blank">{author}</a></div>
        </footer>
    );
};

