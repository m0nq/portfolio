import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';
import { Section } from '@components/section/Section';
import { Banner } from '@components/banner/Banner';
import { BlogPosts } from '@components/posts/BlogPosts';

// Blog listing (indexing)
const Blog = ({ data: { allImages: { nodes: images } } }): JSX.Element => {

    const image = images.find(image => image.original.src.includes('macbook-closeup'));

    return (
        <>
            <main className="main-wrapper">
                <div className="item-list-wrapper">
                    <div className="item-list">
                        <Section classes="banner" data-testid="banner">
                            <Banner image={image}>
                                <div className="banner-container">
                                    <div className="banner-content">
                                        <h1>BLOG<span>.</span></h1>
                                    </div>
                                </div>
                            </Banner>
                        </Section>
                        <Section classes="blog-posts" data-testid="blog-posts">
                            <BlogPosts />
                        </Section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Blog;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'blog') || siteMetadata.title;

    return <title>{capitalizeFirstLetter(title)}</title>;
};

export const query = graphql`
    query AllWPPostQuery {
        allImages: allImageSharp {
            nodes {
                original {
                    src
                }
                gatsbyImageData
            }
        }
        #        postQuery: allWpPost(sort: { date: DESC }, limit: 10) {
        #            edges {
        #                node {
        #                    categories {
        #                        nodes {
        #                            link
        #                            name
        #                        }
        #                    }
        #                    databaseId
        #                    date(formatString: "MMMM Do, YYYY")
        #                    featuredImage {
        #                        node {
        #                            altText
        #                            localFile {
        #                                childImageSharp {
        #                                    gatsbyImageData(width: 10, placeholder: BLURRED, formats: AUTO)
        #                                }
        #                            }
        #                        }
        #                    }
        #                    excerpt
        #                    slug
        #                    title
        #                    uri
        #                }
        #            }
        #        }
        site {
            siteMetadata {
                title
                menuLinks {
                    name
                }
            }
        }
    }
`;
