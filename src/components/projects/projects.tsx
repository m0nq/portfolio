import Link from 'next/link';

import './projects.styles.css';
import { getPosts } from '@utils/api';
import { Section } from '@components/utils/section';
import { Post } from '@data-types/data-props';
import { BlogCardDetails } from '@components/utils/blog/blog-card-details';

export const Projects = async () => {

    const { posts } = await getPosts(4, { category: 'projects' });

    return (
        <>
            <div id="projects" className="projects-container">
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>
                        Some highlights of the recent projects I&apos;ve worked on.
                    </p>
                </div>
                <Section className="project-details">
                    {posts.map(({ post }: { post: Post }) => (
                        <BlogCardDetails key={post.databaseId} post={post} />
                    ))}
                </Section>
                <div className="learn-more">
                    <Link href={'/blog'} className="blog-link">More →</Link>
                </div>
            </div>
        </>
    );
};

