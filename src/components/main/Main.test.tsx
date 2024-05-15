import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Main } from './Main';

describe('Main', () => {
    it('renders the main component', () => {
        render(<Main />);
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });

    it('renders the Banner component', () => {
        const { container } = render(<Main />);
        const bannerElement = container.querySelector('.banner');

        expect(bannerElement).toBeInTheDocument();
        expect(bannerElement).toHaveClass('banner');
    });

    it('renders the About component', () => {
        const { container } = render(<Main />);
        const aboutElement = container.querySelector('.about');

        expect(aboutElement).toBeInTheDocument();
        expect(aboutElement).toHaveClass('about');
    });

    it('renders the Skills component', () => {
        const { container } = render(<Main />);
        const aboutElement = container.querySelector('.skills');

        expect(aboutElement).toBeInTheDocument();
        expect(aboutElement).toHaveClass('skills');
    });

    it('renders the Projects component', () => {
        const { container } = render(<Main />);
        const aboutElement = container.querySelector('.projects');

        expect(aboutElement).toBeInTheDocument();
        expect(aboutElement).toHaveClass('projects');
    });
});
