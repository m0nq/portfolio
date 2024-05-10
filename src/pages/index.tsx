import React from 'react';
import { ReactElement } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '@components/layout';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';
import { Main } from '@components/main/Main';
import { ContactContextProvider } from '@contexts/Contact.context';
import { Contact } from '@components/contact/Contact';

const IndexPage: React.FC<PageProps> = () => {

    return (
        <ContactContextProvider>
            <Layout>
                <Main />
            </Layout>
            <Contact />
        </ContactContextProvider>
    );
};

export default IndexPage;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = siteMetadata.title || findLink(siteMetadata.menuLinks, 'home');

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
