import { Link } from 'gatsby';
import React from 'react';
import { useContext } from 'react';
import { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';
import { ContactContext } from '@contexts/Contact.context';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): ReactElement => {
    const { setIsOpen } = useContext(ContactContext);

    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <Link to="/" className="profile-link">
                <StaticImage src="../../images/smiling_monk.jpeg" alt="Monk smiling" className="profile-image" />
            </Link>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact">
                        <button className="nav-link" onClick={() => setIsOpen(true)}>Contact</button>
                    </li>
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
