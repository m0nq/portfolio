import { Link } from 'gatsby';
import React from 'react';
import { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';
import { ContactContext } from '@contexts/Contact.context';
import { ScrollContext } from '@contexts/Scroll.context';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): JSX.Element => {
    const { setIsOpen } = useContext(ContactContext);
    const { handleScroll } = useContext(ScrollContext);

    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <Link to="/" className="profile-link">
                <StaticImage src="../../images/smiling_monk.jpeg" alt="Smiling Monk" className="profile-image" />
            </Link>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact">
                        <button className="nav-link" onClick={() => setIsOpen(true)}>Contact</button>
                    </li>
                    {filteredMenuLinks.map(({ name, link }) => {
                        return name.includes('projects') ? (
                            <li key={name}>
                                <button className="nav-link" onClick={handleScroll}>
                                    {capitalizeFirstLetter(name)}
                                </button>
                            </li>
                        ) : (
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
