import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Layout } from './Layout';

jest.mock('@components/header/header', () => ({
    Header: () => <div data-testid="header">Header</div>
}));

jest.mock('@components/footer/footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>
}));

jest.mock('@components/contact/Contact', () => ({
    Contact: () => <div data-testid="contact">Contact</div>
}));

jest.mock('@hooks/use-site-metadata', () => ({
    useSiteMetadata: () => ({ site: { menuLinks: [] } })
}));

describe('Layout component', () => {
    it('should render the Header component', () => {
        render(<Layout>This is the content</Layout>);

        const header = screen.getByTestId('header');

        expect(header).toBeDefined();
    });

    it('should render the children component', () => {
        const { getByText } = render(<Layout>This is the content</Layout>);

        expect(getByText('This is the content')).toBeInTheDocument();
    });

    it('should render the Footer component', () => {
        render(<Layout>This is the content</Layout>);

        const footer = screen.getByTestId('footer');

        expect(footer).toBeDefined();
    });

    it('should render the Contact component', () => {
        render(<Layout>This is the content</Layout>);

        const contact = screen.getByTestId('contact'); // Assuming Contact has a data-testid

        expect(contact).toBeDefined();
    });
});
