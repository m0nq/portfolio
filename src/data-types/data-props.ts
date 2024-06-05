import { ReactNode } from 'react';

import { MenuLink } from '@data-types/menu-link.type';

export interface Props {
    children?: ReactNode;
}

export type DataProps = {
    site: {
        siteMetadata: {
            title: string;
            menuLinks: MenuLink[];
        }
    }
}
