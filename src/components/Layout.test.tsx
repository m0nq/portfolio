import React from 'react';
import { Matcher } from '@testing-library/react';
import { render } from '@testing-library/react';
import { SelectorMatcherOptions } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Layout } from '@components/Layout';

jest.mock('@components/header/Header', () => ({
    Header: () => <div data-testid="header">Header</div>
}));

jest.mock('@components/footer/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>
}));

jest.mock('@components/contact/Contact', () => ({
    Contact: () => <div data-testid="contact">Contact</div>
}));

jest.mock('@hooks/use-site-metadata', () => ({
    useSiteMetadata: () => ({ site: { menuLinks: [] } })
}));

describe('Layout component', () => {
    let textQuery: (id: Matcher, options?: (SelectorMatcherOptions | undefined)) => HTMLElement;
    beforeEach(() => {
        const { getByText } = render(<Layout>This is the content</Layout>);
        textQuery = getByText;
    });

    it('should render the Header component', () => {
        const header = screen.getByTestId('header');

        expect(header).toBeDefined();
    });

    it('should render the children component', () => {
        expect(textQuery('This is the content')).toBeInTheDocument();
    });

    it('should render the Footer component', () => {
        const footer = screen.getByTestId('footer');

        expect(footer).toBeDefined();
    });

    it('should render the Contact component', () => {
        const contact = screen.getByTestId('contact'); // Assuming Contact has a data-testid

        expect(contact).toBeDefined();
    });
});
