import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { type IGatsbyImageData } from 'gatsby-plugin-image';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';
import { UniversalLink } from '@components/utils/UniversalLink';
import { Section } from '@components/section/Section';
import { Pagination } from '@components/utils/Pagination';

// Blog listing (indexing)
const Blog = ({ data: { allWpPost: { edges: posts } }, pageContext }: {
    data: any,
    pageContext: any
}): JSX.Element => {

    return (
        <>
            <Section classes="">
                <h1>Posts</h1>
                {posts.map(post => (
                    <article key={post.node.title} className="mx-12 my-0">
                        {post.node.featuredImage && (
                            <figure className="mt-12 mx-[-2rem]">
                                <UniversalLink to={post.node.uri}>
                                    <GatsbyImage
                                        image={getImage(post.node.featuredImage.node.localFile) as IGatsbyImageData}
                                        alt={post.node.featuredImage.node.altText} />
                                </UniversalLink>
                            </figure>
                        )}
                        <h2 className="mb-4 pt-4 text-[4rem] text-center">
                            <UniversalLink to={`/blog${post.node.uri}`}>{post.node.title}</UniversalLink>
                        </h2>
                        <div
                            className="before:block before:mt-0 before:mb-auto before:mx-4 before:content-['- - -'] text-center">
                            by {post.node.author.node.name}. Published {post.node.date}
                        </div>
                        <div className="mx-12 my-auto" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        <div className="mt-0">
                            Tagged:{' '}
                            {/*{post.node.tags.nodes.map((tag, index) => [*/}
                            {/*    index > 0 && ', ',*/}
                            {/*    <UniversalLink key={index} to={tag.link}>*/}
                            {/*        {tag.name}*/}
                            {/*    </UniversalLink>*/}
                            {/*])}*/}
                        </div>
                    </article>
                ))}
            </Section>
            <Pagination pageContext={pageContext} />
        </>
    );
};

export default Blog;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'blog') || siteMetadata.title;

    return <title>{capitalizeFirstLetter(title)}</title>;
};

export const query = graphql`
    query AllWPPostQuery($skip: Int!, $limit: Int!) {
        allWpPost(sort: { date: DESC }, skip: $skip, limit: $limit) {
            edges {
                node {
                    author {
                        node {
                            name
                        }
                    }
                    content
                    categories {
                        nodes {
                            link
                            name
                        }
                    }
                    databaseId
                    date(formatString: "MMMM Do, YYYY")
                    featuredImage {
                        node {
                            altText
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(width: 10, placeholder: BLURRED, formats: AUTO)
                                }
                            }
                        }
                    }
                    excerpt
                    slug
                    title
                    uri
                }
            }
        }
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
