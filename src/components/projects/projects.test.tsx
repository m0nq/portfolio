import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
// describe('Projects', () => {
//     it('renders the intro area', () => {
//         render(<Projects />);
//         screen.debug();
//         const introArea = screen.getByText(/Latest Projects/i);
//         expect(introArea).toBeInTheDocument();
//     });
//
//     it('renders project details', () => {
//         render(<Projects />);
//         const firstProject = screen.getByText(/First/i);
//         const secondProject = screen.getByText(/Second/i);
//         const thirdProject = screen.getByText(/Third/i);
//         expect(firstProject).toBeInTheDocument();
//         expect(secondProject).toBeInTheDocument();
//         expect(thirdProject).toBeInTheDocument();
//     });
//
//     it('renders "Learn More" link', () => {
//         render(<Projects />);
//         const learnMoreLink = screen.getByRole('link', { name: /All Projects/i });
//         expect(learnMoreLink).toBeInTheDocument();
//     });
// });
import { Projects } from '@components/projects/projects';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                data: {
                    posts: {
                        nodes: [
                            {
                                databaseId: 1,
                                title: 'Project 1',
                                excerpt: 'This is the excerpt for Project 1',
                                date: '2023-05-01T00:00:00',
                                uri: '/project-1',
                                featuredImage: {
                                    node: {
                                        altText: 'Project 1 Image',
                                        link: 'https://example.com/project-1-image.jpg',
                                        mediaItemUrl: 'https://example.com/project-1-image.jpg',
                                        sourceUrl: 'https://example.com/project-1-image.jpg',
                                        srcSet: 'https://example.com/project-1-image.jpg 1x'
                                    }
                                }
                            },
                            {
                                databaseId: 2,
                                title: 'Project 2',
                                excerpt: 'This is the excerpt for Project 2',
                                date: '2023-04-15T00:00:00',
                                uri: '/project-2',
                                featuredImage: {
                                    node: {
                                        altText: 'Project 2 Image',
                                        link: 'https://example.com/project-2-image.jpg',
                                        mediaItemUrl: 'https://example.com/project-2-image.jpg',
                                        sourceUrl: 'https://example.com/project-2-image.jpg',
                                        srcSet: 'https://example.com/project-2-image.jpg 1x'
                                    }
                                }
                            }
                        ]
                    }
                }
            })
    })
);

xdescribe('Projects', () => {
    it('renders the component correctly', async () => {
        render(<Projects />);

        // Check if the loading component is rendered initially
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Wait for the data to be fetched and rendered
        await waitFor(() => {
            expect(screen.getByText('Latest Projects')).toBeInTheDocument();
            expect(screen.getByText('Some highlights of the recent projects I\'ve worked on.')).toBeInTheDocument();
        });

        // Check if the project details are rendered correctly
        expect(screen.getByText('Project 1')).toBeInTheDocument();
        expect(screen.getByText('This is the excerpt for Project 1')).toBeInTheDocument();
        expect(screen.getByText('May 1st, 2023')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '/blog/project-1');

        expect(screen.getByText('Project 2')).toBeInTheDocument();
        expect(screen.getByText('This is the excerpt for Project 2')).toBeInTheDocument();
        expect(screen.getByText('April 15th, 2023')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '/blog/project-2');

        // Check if the "All Projects" link is rendered correctly
        expect(screen.getByRole('link', { name: 'All Projects' })).toHaveAttribute('href', '/blog');
    });
});
