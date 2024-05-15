import { MenuLink } from '@data-types/menu-link.type';
import { findLink } from '@utils/find-link';

describe('findLink', () => {
    it('returns undefined for an empty array of links', () => {
        const links: MenuLink[] = [];
        const searchTerm = 'Home';
        const result = findLink(links, searchTerm);
        expect(result).toBeUndefined();
    });

    it('returns undefined for an array with no matching links', () => {
        const links: MenuLink[] = [
            { name: 'About', link: '/about' },
            { name: 'Contact', link: '/contact' }
        ];
        const searchTerm = 'Home';
        const result = findLink(links, searchTerm);
        expect(result).toBeUndefined();
    });

    it('returns the name of the matching link', () => {
        const links: MenuLink[] = [
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' }
        ];
        const searchTerm = 'Home';
        const result = findLink(links, searchTerm);
        expect(result).toBe('Home');
    });

    it('returns the name of the first matching link', () => {
        const links: MenuLink[] = [
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Home', link: '/home' }
        ];
        const searchTerm = 'Home';
        const result = findLink(links, searchTerm);
        expect(result).toBe('Home');
    });

    it('handles different casing of the search term', () => {
        const links: MenuLink[] = [
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' }
        ];
        const searchTerm = 'hOmE';
        const result = findLink(links, searchTerm);
        expect(result).toBe('Home');
    });
});
