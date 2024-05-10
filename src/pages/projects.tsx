import React from 'react';
import { ReactElement } from 'react';
import { type PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '@components/layout';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';
import { ContactProvider } from '@contexts/Contact.context';

const Projects: React.FC<PageProps> = () => {
    return (
        <ContactProvider>
            <Layout>
                <main>Projects</main>
            </Layout>
        </ContactProvider>
    );
};

export default Projects;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'projects') || siteMetadata.title;

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
