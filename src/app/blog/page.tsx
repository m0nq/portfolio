import { ReactElement } from 'react';

import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { BlogPostCard } from '@components/posts/BlogPostCard';
import macbookCloseupImage from '@public/macbook-closeup.webp';

// Blog listing (indexing)
const Page = (): ReactElement => {

    return (
        <>
            <main className="main-wrapper">
                <div className="item-list-wrapper">
                    <div className="item-list">
                        <Section classes="banner" data-testid="banner">
                            <Banner image={macbookCloseupImage}>
                                <div className="banner-container">
                                    <div className="banner-content">
                                        <h1>BLOG<span>.</span></h1>
                                    </div>
                                </div>
                            </Banner>
                        </Section>
                        <Section classes="blog-posts" data-testid="blog-posts">
                            <BlogPostCard />
                        </Section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;
