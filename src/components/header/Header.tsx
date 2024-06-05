import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';
import { ContactContext } from '@contexts/Contact.context';
import { ScrollContext } from '@contexts/Scroll.context';
import { UniversalLink } from '@components/utils/UniversalLink';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): JSX.Element => {
    const { setIsOpen } = useContext(ContactContext);
    const { handleScroll } = useContext(ScrollContext);
    let url: string;

    useEffect(() => {
        (() => {
            url = window?.location?.href || '';
        })();
    }, []);

    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <UniversalLink to="/" activeClassName="profile-link">
                <StaticImage src="../../images/smiling_monk.jpeg" alt="Smiling Monk" className="profile-image" />
            </UniversalLink>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact">
                        <button className="nav-link" onClick={() => setIsOpen(true)}>Contact</button>
                    </li>
                    {filteredMenuLinks.map(({ name, link }) => {
                        return name.includes('projects') ? (
                            <li key={name}>
                                {url?.endsWith('/') ? (
                                    <button className="nav-link" onClick={handleScroll}>
                                        {capitalizeFirstLetter(name)}
                                    </button>
                                ) : (
                                    <UniversalLink to="/#projects" activeClassName="nav-link">
                                        {capitalizeFirstLetter(name)}
                                    </UniversalLink>
                                )}
                            </li>
                        ) : (
                            <li key={name}>
                                <UniversalLink to={link} activeClassName="nav-link">
                                    {capitalizeFirstLetter(name)}
                                </UniversalLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
