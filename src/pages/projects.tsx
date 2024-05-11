import React from 'react';
import { ReactElement } from 'react';
import { type PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';

const Projects: React.FC<PageProps> = () => {
    return (
        <main>Projects</main>
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
