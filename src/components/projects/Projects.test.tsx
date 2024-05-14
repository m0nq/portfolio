import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Projects } from './Projects';

// Mock the ScrollContext
const mockScrollContext = {
    elementRef: jest.fn()
};

jest.mock('@contexts/Scroll.context', () => ({
    ScrollContext: {
        Consumer: ({ children }) => children({ ...mockScrollContext })
    }
}));

describe('Projects', () => {
    it('renders the intro area', () => {
        render(<Projects />);
        const introArea = screen.getByText(/Latest Projects/i);
        expect(introArea).toBeInTheDocument();
    });

    it('renders project details', () => {
        render(<Projects />);
        const firstProject = screen.getByText(/First/i);
        const secondProject = screen.getByText(/Second/i);
        const thirdProject = screen.getByText(/Third/i);
        expect(firstProject).toBeInTheDocument();
        expect(secondProject).toBeInTheDocument();
        expect(thirdProject).toBeInTheDocument();
    });

    it('renders "Learn More" link', () => {
        render(<Projects />);
        const learnMoreLink = screen.getByRole('link', { name: /All Projects/i });
        expect(learnMoreLink).toBeInTheDocument();
    });
});
