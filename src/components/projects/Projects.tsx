import Link from 'next/link';
import { Suspense } from 'react';
import moment from 'moment';

import { Loading } from '@components/loading/Loading';

type QueryString = string;

type PostResult = {
    excerpt: string;
    date: string;
    databaseId: number;
    featuredImage: {
        node: {
            altText: string;
            link: string;
            slug: string;
            srcSet: string;
            sourceUrl: string;
        };
    };
    uri: string;
    title: string;
};

// TODO: move this get call to separate api file/hook
const getPosts = async (): Promise<PostResult[]> => {

    // Filter the list by projects
    // posts(first: 5, where: { tag: "projects" }) {
    const postsQuery: QueryString = `{
            posts {
                nodes {
                    date
                    excerpt
                    featuredImage {
                        node {
                            altText
                            link
                            mediaItemUrl
                            sourceUrl
                            srcSet
                        }
                    }
                title
                uri
                databaseId
            }
        }
    }`;

    const res = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(postsQuery)}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        }
    );

    const { data } = await res.json();

    return data?.posts?.nodes || [];
};

export const Projects = async () => {
    const posts = await getPosts();

    return (
        <>
            <div id="projects" className="projects-container">
                <div className="intro-area">
                    <h2>Latest Projects</h2>
                    <p>
                        Some highlights of the recent projects I&apos;ve worked on.
                    </p>
                </div>
                <Suspense fallback={<Loading />}>
                    <section className="blog-details">
                        {posts.map((post: PostResult) => {
                            return (
                                <div key={post.databaseId}>
                                    <h4>{post.title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                                    <div className="blog-item">
                                        {/* image? */}
                                        <Link href={`/blog${post.uri}`} className="blog-styles">Read More</Link>
                                        <p>{moment(post.date).format('MMMM Do, YYYY')}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </Suspense>
                <div className="learn-more">
                    <Link href={'/blog'} className="blog-link">All Projects</Link>
                </div>
            </div>
        </>
    );
};

