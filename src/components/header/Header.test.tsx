import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';
import { ContactContext } from '@contexts/Contact.context';
import { ScrollContext } from '@contexts/Scroll.context';

// Mock context values
const mockSetIsOpen = jest.fn();
const mockHandleScroll = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(context => {
        if (context === ContactContext) {
            return { setIsOpen: mockSetIsOpen };
        } else if (context === ScrollContext) {
            return { handleScroll: mockHandleScroll };
        } else {
            throw new Error(`Unsupported context: ${context}`);
        }
    })
}));

describe('Header', () => {
    // it('renders Header component with menuLinks', () => {
    //     const menuLinks = [
    //         { name: 'about', link: '/about' },
    //         { name: 'projects', link: '/projects' },
    //         { name: 'blog', link: '/blog' }
    //     ];
    //
    //     render(<Header menuLinks={menuLinks} />);
    //
    //     expect(screen.getByRole('banner')).toBeInTheDocument();
    //     expect(screen.getByTestId('mock-static-image')).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
    //     expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /Projects/i })).toBeInTheDocument();
    //     expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    // });

    it('clicking Contact button calls setIsOpen', () => {
        const menuLinks = [
            { name: 'about', link: '/about' },
            { name: 'projects', link: '/projects' },
            { name: 'blog', link: '/blog' }
        ];

        render(<Header menuLinks={menuLinks} />);

        const contactButton = screen.getByRole('button', { name: /Contact/i });
        contactButton.click();

        expect(mockSetIsOpen).toHaveBeenCalledWith(true);
    });

    // it('clicking Projects button calls handleScroll', () => {
    //     const menuLinks = [
    //         { name: 'about', link: '/about' },
    //         { name: 'projects', link: '/projects' },
    //         { name: 'blog', link: '/blog' }
    //     ];
    //
    //     render(<Header menuLinks={menuLinks} />);
    //
    //     const projectsButton = screen.getByRole('button', { name: /Projects/i });
    //     projectsButton.click();
    //
    //     expect(mockHandleScroll).toHaveBeenCalled();
    // });
    //
    // it('filters out "home" and "contact" links', () => {
    //     const menuLinks = [
    //         { name: 'home', link: '/' },
    //         { name: 'about', link: '/about' },
    //         { name: 'contact', link: '/contact' },
    //         { name: 'projects', link: '/projects' },
    //         { name: 'blog', link: '/blog' }
    //     ];
    //
    //     render(<Header menuLinks={menuLinks} />);
    //
    //     expect(screen.queryByRole('link', { name: /Home/i })).not.toBeInTheDocument();
    //     expect(screen.queryByRole('link', { name: /Contact/i })).not.toBeInTheDocument();
    //     expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /Projects/i })).toBeInTheDocument();
    //     expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    // });
});
