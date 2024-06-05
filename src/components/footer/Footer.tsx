import { ReactElement } from 'react';

import { UniversalLink } from '@components/utils/UniversalLink';

export const Footer = (): ReactElement => {
    const author: string = 'm0nq';

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

