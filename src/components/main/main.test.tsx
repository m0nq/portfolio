import { render, screen, within } from '@testing-library/react';

import { Main } from './main';

jest.mock('@components/projects/projects', () => ({
    Projects: () => <div data-testid="mock-projects">Mock Projects</div>
}));

describe('Main', () => {
    it('renders all top-level content sections', () => {
        render(<Main />);

        expect(screen.getByTestId('banner')).toBeInTheDocument();
        expect(screen.getByTestId('services')).toBeInTheDocument();
        expect(screen.getByTestId('skills')).toBeInTheDocument();
        expect(screen.getByTestId('projects')).toBeInTheDocument();
    });

    it('renders the Projects area content', () => {
        render(<Main />);

        const projectsSection = screen.getByTestId('projects');
        expect(within(projectsSection).getByTestId('mock-projects')).toBeInTheDocument();
    });
});
