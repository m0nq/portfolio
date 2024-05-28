import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { type PageProps } from 'gatsby';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';

// Blog listing (indexing)
const Blog: React.FC<PageProps> = ({ data }) => {
    console.log('data ->', data);

    return (
        <main>Soon... 👀</main>
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
                    databaseId
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
