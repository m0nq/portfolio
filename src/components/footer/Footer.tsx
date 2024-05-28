import React from 'react';
import { ReactElement } from 'react';

import { useSiteMetadata } from '@hooks/use-site-metadata';
import { UniversalLink } from '@components/utils/UniversalLink';

export const Footer = (): ReactElement => {
    const { author } = useSiteMetadata();

    return (
        <footer>
            <div>@ {new Date().getFullYear()} by{' '}
                <UniversalLink to="https://github.com/m0nq" activeClassName="footer-link">
                    {author}
                </UniversalLink>
            </div>
        </footer>
    );
};

