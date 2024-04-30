import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { type PageProps } from 'gatsby';

import { Layout } from '@components/layout';
import { findLink } from '@utils/find-link';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';

const About: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>About</main>
        </Layout>
    );
};

export default About;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'blog') || siteMetadata.siteMetadata.title;

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
