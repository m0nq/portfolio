import { Link } from 'gatsby';
import * as React from 'react';
import { ReactElement } from 'react';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

type MenuLink = { link: string; name: string; }

export const Header = ({ siteTitle, menuLinks }: { siteTitle: string, menuLinks: MenuLink[] }): ReactElement => {
    return (
        <header>
            <div>
                <div>
                    <div>
                        <nav>
                            <ul>
                                {menuLinks
                                    .filter(link => link.name !== 'home')
                                    .map(({ name, link }) => {
                                        const parsedName = capitalizeFirstLetter(name);
                                        return (
                                            <li key={name}><Link to={link}>{parsedName}</Link></li>
                                        );
                                    })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
