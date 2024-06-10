'use client';
import { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import macbookCloseupImage from '@public/macbook-closeup.webp';
import { getPosts } from '@components/utils/api';
import { Post } from '@components/utils/api';
import { CursorType } from '@components/utils/api';
import { PageInfo } from '@components/utils/api';
import { PostResult } from '@components/utils/api';
import { BlogCardDetails } from '@components/blog/BlogCardDetails';

// Blog listing (indexing)
const BlogPage = (): ReactElement => {
    const [{ posts, pageInfo }, setPostState] = useState({} as { posts: PostResult[], pageInfo: PageInfo });

    useEffect(() => {
        (async () => {
            setPostState(await getPosts());
        })();
    }, []);

    const handlePageChange = useCallback(async (cursor: { before?: CursorType, after?: CursorType }) => {
        setPostState(await getPosts(10, cursor));
    }, []);

    return (
        <>
            <Section classes="banner" data-testid="banner">
                <Banner image={macbookCloseupImage}>
                    <div className="banner-container">
                        <div className="banner-content">
                            <h1>BLOG<span>.</span></h1>
                            <div className="strong-emphasis">
                                <p>Just a few thoughts...</p>
                            </div>
                        </div>
                    </div>
                </Banner>
            </Section>
            <Section classes="blog-posts" data-testid="blog-posts">
                <div className="px-8 my-14 mx-auto">
                    <div>
                        <section className="blog-details">
                            {posts?.map(({ node: post }: { node: Post }) => (
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
