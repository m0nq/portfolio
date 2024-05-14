// @ts-check

import { GatsbyNode } from 'gatsby';

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = () => {};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
    actions.createTypes(`
        type Query {
            site: Site!
        }
        
        type Site {
            siteMetadata: SiteMetadata!
            title: String!
            siteTitle: String!
            siteTitleAlt: String!
            siteUrl: String!
            siteImage: String!
            siteDescription: String!
            siteLanguage: String!
            author: String!
            menuLinks: [MenuLink!]!
        }
        
        type MenuLink {
            name: String!
            link: String!
        }
        
        type SiteMetadata {
            title: String!
        }
    `);
};
