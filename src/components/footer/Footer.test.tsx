import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './Footer';

jest.mock('@hooks/use-site-query-data', () => ({
    useSiteQueryData: () => ({ site: { siteMetadata: { author: 'John Doe' } } })
}));

describe('Footer', () => {
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
