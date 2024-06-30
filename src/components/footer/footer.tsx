import { ReactElement } from 'react';
import Link from 'next/link';

import './footer.styles.css';

export const Footer = (): ReactElement => {
    return (
        <footer>
            <div>&copy; {new Date().getFullYear()} by{' '}
                <Link href="https://github.com/m0nq" className="footer-link" target="_blank">
                    m0nq
                </Link>
            </div>
        </footer>
    );
};

