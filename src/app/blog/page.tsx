'use client';
import { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import macbookCloseupImage from '@public/macbook-closeup.webp';
import { getPosts } from '@components/utils/api';
import { BlogCardDetails } from '@components/blog/BlogCardDetails';
import { Post } from '@data-types/data-props';
import { PageInfo } from '@data-types/data-props';
import { CursorType } from '@data-types/data-props';
import { PostEdges } from '@data-types/data-props';

// Blog listing (indexing)
const BlogPage = (): ReactElement => {
    const [{ posts, pageInfo }, setPosts] = useState({} as { posts: PostEdges[], pageInfo: PageInfo });

    useEffect(() => {
        (async () => {
            setPosts(await getPosts());
        })();
    }, []);

    const handlePageChange = useCallback(async (cursor: { before?: CursorType, after?: CursorType }) => {
        setPosts(await getPosts(10, cursor));
    }, []);

    return (
        <>
            <Section classes="banner" data-testid="banner">
                <Banner image={macbookCloseupImage}>
                    <div className="banner-container">
                        <div className="banner-content">
                            <h1>BLOG<span>.</span></h1>
                            <div className="strong-emphasis">
                                <p>A few thoughts...</p>
                            </div>
                        </div>
                    </div>
                </Banner>
            </Section>
            <Section classes="blog-posts" data-testid="blog-posts">
                <div className="px-8 my-14 mx-auto">
                    <div>
                        <section className="blog-details">
                            {posts?.map(({ post }: { post: Post }) => (
                                <BlogCardDetails key={post.databaseId} post={post} />
                            ))}
                        </section>
                    </div>
                </div>
            </Section>
            <nav className="pagination-wrapper">
                <div>
                    {pageInfo?.hasPreviousPage &&
                      <button onClick={() => handlePageChange({ before: pageInfo?.startCursor })}>
                        ← Newer Posts
                      </button>}
                </div>
                <div>
                    {pageInfo?.hasNextPage &&
                      <button onClick={() => handlePageChange({ after: pageInfo?.endCursor })}>
                        Older Posts →
                      </button>}
                </div>
            </nav>
        </>
    );
};

export default BlogPage;
