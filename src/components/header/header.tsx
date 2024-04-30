import { Link } from 'gatsby';
import React from 'react';
import { ReactElement } from 'react';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';

export const Header = ({ siteTitle, menuLinks }: { siteTitle: string, menuLinks: MenuLink[] }): ReactElement => {
    return (
        <header>
            <Link to="/">
                {/* Image goes here */}
            </Link>
            <div className="seperator"></div>
            <nav>
                <ul>
                    <li key="contact"><Link to="/contact">Contact</Link></li>
                    {menuLinks
                        .filter((link: MenuLink) => link.name !== 'home')
                        .filter((link: MenuLink) => link.name !== 'contact')
                        .map(({ name, link }) => {
                            const parsedName = capitalizeFirstLetter(name);
                            return (
                                <li key={name}><Link to={link}>{parsedName}</Link></li>
                            );
                        })}
                </ul>
            </nav>
        </header>
    )
        ;
};
