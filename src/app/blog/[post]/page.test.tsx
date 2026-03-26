import { render, screen } from '@testing-library/react';

import { getPost } from '@utils/api';
import { notFound } from 'next/navigation';
import BlogPost from './page';

jest.mock('@utils/api', () => ({
    getPost: jest.fn()
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        back: jest.fn()
    })),
    notFound: jest.fn(() => {
        throw new Error('NEXT_NOT_FOUND');
    })
}));

const mockedGetPost = getPost as jest.MockedFunction<typeof getPost>;
const mockedNotFound = notFound as jest.MockedFunction<typeof notFound>;

describe('Blog post page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders a blog post and normalizes the route param to a WordPress URI', async () => {
        mockedGetPost.mockResolvedValue({
            title: 'Language Arts: Future Perfect',
            date: '2025-04-29T10:00:00',
            content: '<p>Rendered content</p>',
            featuredImage: {
                node: {
                    altText: 'Featured image alt text',
                    sourceUrl: 'https://cirquitree.com/wp-content/uploads/2025/04/school-of-athens.png'
                }
            }
        } as Awaited<ReturnType<typeof getPost>>);

        render(await BlogPost({
            params: Promise.resolve({
                post: 'language-arts-future-perfect-navigating-the-promise-and-perils-of-tomorrow'
            })
        }));

        expect(mockedGetPost).toHaveBeenCalledWith(
            '/language-arts-future-perfect-navigating-the-promise-and-perils-of-tomorrow/'
        );
        expect(screen.getByText(/Language Arts: Future Perfect/i)).toBeInTheDocument();
        expect(screen.getByText(/Posted on April 29th, 2025/i)).toBeInTheDocument();
        expect(screen.getByText('Rendered content')).toBeInTheDocument();
    });

    it('calls notFound when the requested post does not exist', async () => {
        mockedGetPost.mockResolvedValue(null);

        await expect(BlogPost({
            params: Promise.resolve({
                post: 'missing-post'
            })
        })).rejects.toThrow('NEXT_NOT_FOUND');

        expect(mockedGetPost).toHaveBeenCalledWith('/missing-post/');
        expect(mockedNotFound).toHaveBeenCalled();
    });

    it('renders a stable fallback when the post request fails', async () => {
        mockedGetPost.mockRejectedValue(new Error('fetch failed'));

        render(await BlogPost({
            params: Promise.resolve({
                post: 'language-arts-future-perfect-navigating-the-promise-and-perils-of-tomorrow'
            })
        }));

        expect(screen.getByText('This post is temporarily unavailable')).toBeInTheDocument();
        expect(
            screen.getByText('Something went wrong while loading this article. Please try again, or come back later.')
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Back to blog' })).toHaveAttribute('href', '/blog');
    });
});
