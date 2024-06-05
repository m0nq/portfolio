import { MenuLink } from '@data-types/menu-link.type';

export const findLink = (links: MenuLink[], searchTerm: string): string | undefined => {
    return (links.find((link: MenuLink) => link.name.toLowerCase() === searchTerm.toLowerCase()))?.name;
};
