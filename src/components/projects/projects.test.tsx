import { render, screen } from '@testing-library/react';

import { getPosts } from '@utils/api';
import { Projects } from './projects';

jest.mock('@utils/api', () => ({
    getPosts: jest.fn()
}));

const mockedGetPosts = getPosts as jest.MockedFunction<typeof getPosts>;

describe('Projects', () => {
    it('renders project cards from fetched posts', async () => {
        mockedGetPosts.mockResolvedValue({
            posts: [
                {
                    post: {
                        databaseId: 1,
                        title: 'Project 1',
                        excerpt: 'Excerpt 1',
                        date: '2023-05-01T00:00:00',
                        uri: '/project-1',
                        featuredImage: {
                            node: {
                                altText: 'Project 1 image',
                                link: '',
                                slug: '',
                                srcSet: '',
                                sourceUrl: 'https://example.com/project-1-image.jpg'
                            }
                        }
                    }
                },
                {
                    post: {
                        databaseId: 2,
                        title: 'Project 2',
                        excerpt: 'Excerpt 2',
                        date: '2023-04-15T00:00:00',
                        uri: '/project-2',
                        featuredImage: {
                            node: {
                                altText: 'Project 2 image',
                                link: '',
                                slug: '',
                                srcSet: '',
                                sourceUrl: 'https://example.com/project-2-image.jpg'
                            }
                        }
                    }
                }
            ],
            pageInfo: {
                hasNextPage: false,
                endCursor: null,
                hasPreviousPage: false,
                startCursor: null
            }
        });

        render(await Projects());

        expect(mockedGetPosts).toHaveBeenCalledWith(4, { category: 'projects', tag: 'portfolio' });
        expect(screen.getByText('Latest Projects')).toBeInTheDocument();
        expect(screen.getByText('Project 1')).toBeInTheDocument();
        expect(screen.getByText('Project 2')).toBeInTheDocument();
        expect(screen.getByText('Excerpt 1')).toBeInTheDocument();
        expect(screen.getByText('Excerpt 2')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'More →' })).toHaveAttribute('href', '/blog');
        expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(2);
    });

    it('renders static content when no posts are returned', async () => {
        mockedGetPosts.mockResolvedValue({
            posts: [],
            pageInfo: {
                hasNextPage: false,
                endCursor: null,
                hasPreviousPage: false,
                startCursor: null
            }
        });

        render(await Projects());

        expect(screen.getByText('Latest Projects')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'More →' })).toHaveAttribute('href', '/blog');
        expect(screen.queryByRole('link', { name: 'Read More' })).not.toBeInTheDocument();
    });

    it('propagates errors when project loading fails', async () => {
        mockedGetPosts.mockRejectedValue(new Error('WordPress API request failed'));

        await expect(Projects()).rejects.toThrow('WordPress API request failed');
        expect(mockedGetPosts).toHaveBeenCalledWith(4, { category: 'projects', tag: 'portfolio' });
    });
});
