import { ReactElement } from 'react';

import { Section } from '@components/utils/section';
import { Banner } from '@components/banner/Banner';
import macbookCloseupImage from '@public/macbook-closeup.webp';
import { getPosts } from '@utils/api';
import { BlogCardDetails } from '@components/blog/BlogCardDetails';
import { Post } from '@data-types/data-props';

const BlogPage = async (): Promise<ReactElement> => {

    const { posts, pageInfo } = await getPosts();

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
                <div className="px-6 my-14 mx-auto">
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
                        // <button onClick={() => handlePageChange({ before: pageInfo?.startCursor })}>
                      <button onClick={async () => {
                          await getPosts(10, { before: pageInfo?.startCursor });
                      }}>
                        ← Newer Posts
                      </button>}
                </div>
                <div>
                    {pageInfo?.hasNextPage &&
                        // <button onClick={() => handlePageChange({ after: pageInfo?.endCursor })}>
                      <button onClick={async () => await getPosts(10, { after: pageInfo?.startCursor })}>
                        Older Posts →
                      </button>}
                </div>
            </nav>
        </>
    );
};

export default BlogPage;
