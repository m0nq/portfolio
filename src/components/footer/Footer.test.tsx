import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './Footer';
import { useSiteMetadata } from '@hooks/use-site-metadata';

jest.mock('@hooks/use-site-metadata', () => ({
    useSiteMetadata: jest.fn()
}));

describe('Footer', () => {
    beforeEach(() => {
        (useSiteMetadata as jest.Mock).mockReturnValue({ author: 'John Doe' });
    });

    it('renders the footer with the correct author name', () => {
        render(<Footer />);
        const authorLink = screen.getByRole('link', { name: 'John Doe' });
        expect(authorLink).toBeInTheDocument();
    });

    it('renders the footer with the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const yearElement = screen.getByText(`@ ${currentYear.toString()} by`);
        expect(yearElement).toBeInTheDocument();
    });
});
