import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skills } from './Skills';

describe('Skills component', () => {
    it('renders the image and skills component', () => {
        render(<Skills />);
        const skillsContainer = screen.getByText(/skills/i);
        expect(skillsContainer).toBeInTheDocument();
    });

    it('renders the "Technical" skills list', () => {
        render(<Skills />);
        const technicalSkillsHeading = screen.getByText(/technical/i);
        expect(technicalSkillsHeading).toBeInTheDocument();

        const technicalSkills = [
            'JavaScript/TypeScript',
            'React',
            'GatsbyJS',
            'Next.js',
            'Jest',
            'HTML',
            'CSS',
            'TailwindCSS',
            'Node.js'
        ];
        technicalSkills.forEach((skill) => {
            const skillItem = screen.getByText(skill);
            expect(skillItem).toBeInTheDocument();
        });
    });

    it('renders the "Soft" skills list', () => {
        render(<Skills />);
        const softSkillsHeading = screen.getByText(/soft/i);
        expect(softSkillsHeading).toBeInTheDocument();

        const softSkills = [
            'Clear Communication',
            'Time Management',
            'Attention to detail',
            'Problem Solving',
            'Creativity',
            'Leadership',
            'Adaptive Learning'
        ];
        softSkills.forEach((skill) => {
            const skillItem = screen.getByText(skill);
            expect(skillItem).toBeInTheDocument();
        });
    });

    it('renders the image', () => {
        render(<Skills />);
        const image = screen.getByTestId('mock-static-image');
        expect(image).toBeInTheDocument();
    });
});
