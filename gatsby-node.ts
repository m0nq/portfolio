// @ts-check

import { GatsbyNode } from 'gatsby';
import { slash } from 'gatsby-core-utils';
import { paginate } from 'gatsby-awesome-pagination';
import * as path from 'path';

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions: { createPage }, graphql, reporter }): Promise<void> => {

  // Query all the data
  const { errors, data: { allPostQuery, postQuery, catQuery, tagQuery } } = await graphql(`
      query WPQuery {
          allPostQuery: allWpPost(sort: { date: DESC }) {
              edges {
                  node {
                      author {
                          node {
                              name
                          }
                      }
                      content
                      categories {
                          nodes {
                              link
                              name
                          }
                      }
                      databaseId
                      date(formatString: "MMMM Do, YYYY")
                      featuredImage {
                          node {
                              altText
                              localFile {
                                  childImageSharp {
                                      gatsbyImageData(width: 10, placeholder: BLURRED, formats: AUTO)
                                  }
                              }
                          }
                      }
                      excerpt
                      slug
                      title
                      uri
                  }
                  next {
                      databaseId
                  }
                  previous {
                      databaseId
                  }
              }
          }
          postQuery: wpPost {
              content
              date(formatString: "MMMM Do, YYYY")
              title
              uri
              databaseId
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
                      databaseId
                      filename
                      link
                      srcSet
                      uri
                  }
              }
          }
          catQuery: allWpCategory {
              nodes {
                  databaseId
                  uri
                  name
                  posts {
                      nodes {
                          databaseId
                      }
                  }
              }
          }
          tagQuery: allWpTag {
              nodes {
                  databaseId
                  uri
                  name
                  posts {
                      nodes {
                          databaseId
                      }
                  }
              }
          }
      }
  `);

    if (errors) {
        reporter.panic('error loading events', errors);
        return;
    }

    const posts = allPostQuery.edges;
    posts.forEach(post => {
        createPage({
            path: `/blog${post.node.uri}`,
            component: slash(path.resolve('./src/templates/post.tsx')),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                databaseId: post.node.databaseId,
                nextId: post.next && post.next.databaseId || null,
                prevId: post.previous && post.previous.databaseId || null
            }
        });
    });

  // Create your paginated pages
    paginate({
        createPage, // The Gatsby `createPage` function
        items: posts, // An array of objects
        itemsPerPage: 4, // How many items you want per page
        pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
        component: slash(path.resolve(`./src/templates/blog.tsx`)) // Just like `createPage()`
    });

  // Create your paginated category indexes
    const categories = catQuery.nodes;
    categories.map(category => {
        paginate({
            createPage, // The Gatsby `createPage` function
            items: category.posts.nodes, // An array of objects
            itemsPerPage: 4, // How many items you want per page
            pathPrefix: category.uri.slice(0, -1), // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve(`./src/templates/Categories.tsx`), // Just like `createPage()`
            context: {
                catId: category.databaseId,
                catName: category.name
            }
        });
    });

  // Create your paginated tag indexes
  //   const tags = queryResult.data.tagQuery.nodes;
  //   tags.map(tag => {
  //       paginate({
  //           createPage, // The Gatsby `createPage` function
  //           items: tag.posts.nodes, // An array of objects
  //           itemsPerPage: 4, // How many items you want per page
  //           pathPrefix: tag.uri.slice(0, -1), // Creates pages like `/blog`, `/blog/2`, etc
  //           component: path.resolve(`./src/templates/tags.js`), // Just like `createPage()`
  //           context: {
  //               tagId: tag.databaseId,
  //               tagName: tag.name
  //           }
  //       });
  //   });
};

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
            description: String!
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
