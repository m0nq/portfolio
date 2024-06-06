'use client';
import { useContext } from 'react';
import Image from 'next/image';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { MenuLink } from '@data-types/menu-link.type';
import { ContactContext } from '@contexts/Contact.context';
import { UniversalLink } from '@components/utils/UniversalLink';
import smilingMonkImage from '@public/smiling_monk.png';

export const Header = ({ menuLinks }: { menuLinks: MenuLink[] }): JSX.Element => {
    const { setIsOpen } = useContext(ContactContext);

    const filteredMenuLinks = menuLinks
        .filter((link: MenuLink) => link.name !== 'home')
        .filter((link: MenuLink) => link.name !== 'contact');

    return (
        <header>
            <UniversalLink to="/" activeClassName="profile-link">
                <Image src={smilingMonkImage} alt="Smiling Monk" className="profile-image" />
            </UniversalLink>
            <nav className="primary-navigation">
                <ul>
                    <li key="contact">
                        <button className="nav-link" onClick={() => setIsOpen(true)}>Contact</button>
                    </li>
                    {filteredMenuLinks.map(({ name, link }) => {
                        return name.includes('projects') ? (
                            <li key={name}>
                                <UniversalLink to="/#projects" activeClassName="nav-link">
                                    {capitalizeFirstLetter(name)}
                                </UniversalLink>
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
