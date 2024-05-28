import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

import { Pagination } from '@components/utils/Pagination';
import { UniversalLink } from '@components/utils/UniversalLink';

const CategoryIndex = ({ data, pageContext }) => {
    const { catName } = pageContext;
    const posts = data.allWpPost.nodes;

    return (
        <>
            <section className={styles.articlelist}>
                <h1>Category: {catName}</h1>
                {posts.map((post, index) => (
                    <article key={index} className={styles.listitem}>
                        {post.featuredImage && (
                            <figure className={styles.featimg}>
                                <UniversalLink to={post.uri}>
                                    <GatsbyImage
                                        image={getImage(post.featuredImage.node.localFile)}
                                        alt={post.featuredImage.node.altText}
                                    />
                                </UniversalLink>
                            </figure>
                        )}
                        {/*<Catlist postObject={post} />*/}
                        <h2 className={styles.article__title}>
                            <UniversalLink to={`/posts${post.uri}`}>{post.title}</UniversalLink>
                        </h2>
                        <div className={styles.article__meta}>
                            by {post.author.node.name}. Published{' '}
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}{' '}
                        </div>
                        <div
                            className={styles.article__content}
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                        <div className={styles.article__tax}>
                            Tagged:{' '}
                            {post.tags.nodes.map((tag, index) => [
                                index > 0 && ', ',
                                <UniversalLink key={index} to={tag.link}>
                                    {tag.name}
                                </UniversalLink>
                            ])}
                        </div>
                    </article>
                ))}
            </section>
            <Pagination pageContext={pageContext} />;</>
    );
};

export default CategoryIndex;

export const pageQuery = graphql`
    query ($catId: Int!, $skip: Int!, $limit: Int!) {
        allWpPost(sort: { date: ASC } skip: $skip limit: $limit filter: { categories: { nodes: { elemMatch: { databaseId: { eq: $catId }}}}}) {
            nodes {
                date
                databaseId
                excerpt
                uri
                slug
                title
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
        }
    }
`;
