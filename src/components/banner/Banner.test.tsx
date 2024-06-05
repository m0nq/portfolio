import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { type IGatsbyImageData } from 'gatsby-plugin-image';

import { Banner } from './Banner';

jest.mock('gatsby-plugin-image', () => ({
    ...jest.requireActual('gatsby-plugin-image'),
    getImage: jest.fn(),
    GatsbyImage: () => <div data-testid="mock-gatsby-image" />,
}));

const mockImageData = {
    gatsbyImageData: {
        images: {
            sources: [
                {
                    srcSet: '/static/mock-image-1234.webp 400w,/static/mock-image-5678.webp 800w',
                    sizes: '(min-width: 800px) 800px, 100vw',
                    type: 'image/webp'
                }
            ],
            fallback: {
                src: '/static/mock-image-9012.jpg',
                srcSet: '/static/mock-image-9012.jpg 400w,/static/mock-image-3456.jpg 800w',
                sizes: '(min-width: 800px) 800px, 100vw'
            }
        },
        layout: 'constrained',
        width: 800,
        height: 600
    } as IGatsbyImageData
};

describe('Banner', () => {
    it('renders the GatsbyImage component with the provided image data', () => {
        const { getByTestId } = render(<Banner image={mockImageData} />);
        const bannerImage = getByTestId('banner-image');
        expect(bannerImage).toBeInTheDocument();
    });

    it('renders the children prop', () => {
        const childContent = <p>This is a child element</p>;
        const { getByText } = render(<Banner image={mockImageData}>{childContent}</Banner>);
        const childElement = getByText('This is a child element');
        expect(childElement).toBeInTheDocument();
    });

    it('renders without children prop', () => {
        const { container } = render(<Banner image={mockImageData} />);
        expect(container.children.length).toBe(1);
    });
});
