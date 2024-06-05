import React from 'react';
import { ReactElement } from 'react';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { type IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

import { UniversalLink } from '@components/utils/UniversalLink';
import { useWPPostQuery } from '@hooks/use-wp-post';
import { CatList } from '@components/utils/CatList';
import { findLink } from '@utils/find-link';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

// Individual posts
const Post = (): JSX.Element => {
    const { site, post } = useWPPostQuery();
    const seoImageSrc = post.featuredImage ? getSrc(post.featuredImage.node.localFile) : '/logo.png';

    return (
        <>
            <article className="my-0 mx-auto py-o px-8">
                {post.featuredImage && (
                    <figure className="mt-12 mx-[-2rem]">
                        <GatsbyImage image={getImage(post.featuredImage.node.localFile) as IGatsbyImageData}
                            alt={post.featuredImage.node.altText} />
                    </figure>
                )}
                <CatList postObject={post} />
                <h1 className="my-4 text-[4rem] text-center">{post.title}</h1>
                <div className="text-center mt-0 before:block before:mt-0 before:mb-auto before:mx-4">
                    by {post.author.node.name}. Published on{' '}
                    {post.date}
                    {/*{new Date(post.date).toLocaleDateString('en-US', {*/}
                    {/*    month: 'long',*/}
                    {/*    day: 'numeric',*/}
                    {/*    year: 'numeric'*/}
                    {/*})}*/}
                </div>
                <div className="my-12 mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
                <div>
                    Tagged:{' '}
                    {post.tags.nodes.map(tag => (
                        <UniversalLink key={tag.name} to={tag.link}>
                            {tag.name}
                        </UniversalLink>
                    )).join(', ')}
                </div>
            </article>
        </>
    );
};

export default Post;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'blog') || siteMetadata.title;

    return <title>{capitalizeFirstLetter(title)}</title>;
};

export const query = graphql`
    query WPPostQuery($databaseId: Int!, $nextId: Int, $prevId: Int) {
        site {
            siteMetadata {
                title
                menuLinks {
                    name
                }
            }
        }
        wpPost(databaseId: { eq: $databaseId }) {
            date
            databaseId
            title
            content
            uri
            author {
                node {
                    name
                }
            }
            categories {
                nodes {
                    name
                    link
                }
            }
            tags {
                nodes {
                    name
                    link
                }
            }
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 1360, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                        }
                    }
                }
            }
        }
        nextPost: wpPost(databaseId: { eq: $nextId }) {
            title
            uri
        }
        prevPost: wpPost(databaseId: { eq: $prevId }) {
            title
            uri
        }
    }
`;
