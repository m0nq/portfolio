import React from 'react';
import { ReactElement } from 'react';

import { useSiteQueryData } from '@hooks/use-site-query-data';
import { UniversalLink } from '@components/utils/UniversalLink';

export const Footer = (): ReactElement => {
    const { site: { siteMetadata: { author } } } = useSiteQueryData();

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

