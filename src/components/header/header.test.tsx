import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { Header } from './header';

describe('Header', () => {
    it('renders Header component with menuLinks', () => {
        const menuLinks = [
            { name: 'about', link: '/about' },
            { name: 'projects', link: '/projects' },
            { name: 'blog', link: '/blog' }
        ];

        render(<Header menuLinks={menuLinks} />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByTestId('mock-static-image')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    });

    it('filters out "home" and "contact" links', () => {
        const menuLinks = [
            { name: 'home', link: '/' },
            { name: 'about', link: '/about' },
            { name: 'contact', link: '/contact' },
            { name: 'projects', link: '/projects' },
            { name: 'blog', link: '/blog' }
        ];

        render(<Header menuLinks={menuLinks} />);

        expect(screen.queryByRole('link', { name: /Home/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /Contact/i })).not.toBeInTheDocument();
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    });
});

