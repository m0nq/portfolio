import { Link } from 'gatsby';
import React from 'react';
import { ReactElement } from 'react';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): ReactElement => {
    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <Link to="/" className="profile-link">
                <div className="profile-image">Image</div>
                {/*<img  />*/}
            </Link>
            <div className="separator"></div>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact"><Link to="/contact" className="nav-link">Contact</Link></li>
                    {filteredMenuLinks.map(({ name, link }) => {
                        return (
                            <li key={name}>
                                <Link to={link} className="nav-link">{capitalizeFirstLetter(name)}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
