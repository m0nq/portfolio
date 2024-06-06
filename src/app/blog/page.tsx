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
                                        <div className="strong-emphasis">
                                            <p>
                                                Where I share some thoughts...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Banner>
                        </Section>
                        <Section classes="blog-posts" data-testid="blog-posts">
                            <div className="intro-area">
                                <h2>Latest Projects</h2>
                                {/*<p>*/}
                                {/*    Some highlights of the recent projects I&apos;ve worked on.*/}
                                {/*</p>*/}
                            </div>
                            <BlogPostCard />
                        </Section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;
