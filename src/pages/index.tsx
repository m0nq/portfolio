import React from 'react';
import { ReactElement } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '@components/layout';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>Interesting stuff will go here...</main>
        </Layout>
    );
};

export default IndexPage;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'home') || siteMetadata.siteMetadata.title;

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
