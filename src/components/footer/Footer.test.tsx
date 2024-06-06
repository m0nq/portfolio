import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
    it('renders the footer with the correct author name', () => {
        render(<Footer />);
        const authorLink = screen.getByRole('link', { name: 'm0nq' });
        expect(authorLink).toBeInTheDocument();
    });

    it('renders the footer with the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const yearElement = screen.getByText(`@ ${currentYear.toString()} by`);
        expect(yearElement).toBeInTheDocument();
    });
});
