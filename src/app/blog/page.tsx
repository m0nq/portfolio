import { ReactElement } from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import macbookCloseupImage from '@public/macbook-closeup.webp';
import { getPosts } from '@components/utils/api';
import { PostResult } from '@components/utils/api';
import { BlogCardDetails } from '@components/blog/BlogCardDetails';

// Blog listing (indexing)
const BlogPage = async (): Promise<ReactElement> => {
    const posts = await getPosts();

    return (
        <>
            <Section classes="banner" data-testid="banner">
                <Banner image={macbookCloseupImage}>
                    <div className="banner-container">
                        <div className="banner-content">
                            <h1>BLOG<span>.</span></h1>
                            <div className="strong-emphasis">
                                <p>Some thoughts on a few topics</p>
                            </div>
                        </div>
                    </div>
                </Banner>
            </Section>
            <Section classes="blog-posts" data-testid="blog-posts">
                <div className="px-8 my-14 mx-auto">
                    {/* limit to 10, paginate posts */}
                    <div>
                        <section className="blog-details">
                            {posts.map((post: PostResult) => (
                                <BlogCardDetails key={post.databaseId} post={post} />
                            ))}
                        </section>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default BlogPage;
