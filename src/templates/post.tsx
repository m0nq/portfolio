import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { type IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

import { UniversalLink } from '@components/utils/UniversalLink';

// Individual posts
const Post = ({ data: { wpPost: post, featuredImage } }): JSX.Element => {
    const seoImageSrc = featuredImage ? getSrc(featuredImage.node.localFile) : '/logo.png';

    console.log('currentPost ->', post);

    return (
        <>
            <article className="my-0 mx-auto py-o px-8">
                {post.featuredImage && (
                    <figure className="mt-12 mx-[-2rem]">
                        <GatsbyImage image={getImage(featuredImage.node.localFile) as IGatsbyImageData}
                            alt={featuredImage.node.altText} />
                    </figure>
                )}
                {/*<Catlist postObject={post} />*/}
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
                    {post.tags.nodes.map((tag, index) => {
                        return [
                            index && ', ',
                            <UniversalLink key={index} to={tag.link}>
                                {tag.name}
                            </UniversalLink>
                        ];
                    })}
                </div>
            </article>
        </>
    );
};

export default Post;

// export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
//     const title: string = findLink(siteMetadata.menuLinks, 'blog') || siteMetadata.title;
//
//     return <title>{capitalizeFirstLetter(title)}</title>;
// };

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
