import Link from 'next/link';

import { getPosts } from '@components/utils/api';
import { Post } from '@data-types/data-props';
import { BlogCardDetails } from '@components/blog/BlogCardDetails';

export const Projects = async () => {

    const { posts } = await getPosts(4);

    return (
        <>
            <div id="projects" className="projects-container">
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>
                        Some highlights of the recent projects I&apos;ve worked on.
                    </p>
                </div>
                <section className="blog-details">
                    {posts.map(({ post }: { post: Post }) => (
                        <BlogCardDetails key={post.databaseId} post={post} />
                    ))}
                </section>
                <div className="learn-more">
                    <Link href={'/blog'} className="blog-link">All Posts →</Link>
                </div>
            </div>
        </>
    );
};

