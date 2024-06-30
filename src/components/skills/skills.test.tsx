import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Skills } from './skills';

// Mock the imported image
jest.mock('@public/abstract-building.webp', () => 'mock-image.webp');

describe('Skills', () => {
    let getByRenderedRole;
    beforeEach(() => {
        const { getByRole } = render(<Skills />);
        getByRenderedRole = getByRole;
    });

    it('checks if the main heading is rendered', () => {

        // Check if the main heading is rendered
        const heading = getByRenderedRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Skills');
    });

    it('checks if the technical skills list is rendered', () => {
        const technicalSkillsHeading = getByRenderedRole('heading', { level: 3, name: 'Technical' });
        expect(technicalSkillsHeading).toBeInTheDocument();

        const technicalSkillsList = screen.getByTestId('technical-skills-list');
        expect(technicalSkillsList).toBeInTheDocument();
        expect(technicalSkillsList.children.length).toBe(9); // Check if there are 9 list items
    });

    it('should check if the soft skills list is rendered', () => {
        // Check if the soft skills list is rendered
        const softSkillsHeading = getByRenderedRole('heading', { level: 3, name: 'Soft' });
        expect(softSkillsHeading).toBeInTheDocument();

        const softSkillsList = screen.getByTestId('soft-skills-list');
        expect(softSkillsList).toBeInTheDocument();
        expect(softSkillsList.children.length).toBe(7); // Check if there are 7 list items
    });

    it('should check if the image is rendered', () => {
        // Check if the image is rendered
        const image = screen.getByAltText('Abstract building');
        expect(image).toBeInTheDocument();
        expect(image).toHaveClass('skills-image');
    });
});
