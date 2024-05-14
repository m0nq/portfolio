import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { type PageProps } from 'gatsby';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';

const Blog: React.FC<PageProps> = () => {
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
    query HomePageQuery {
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
