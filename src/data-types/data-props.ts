import { MenuLink } from '@data-types/menu-link.type';

export type DataProps = {
    site: {
        siteMetadata: {
            title: string;
            menuLinks: MenuLink[];
        }
    }
}
