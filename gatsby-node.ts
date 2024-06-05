// @ts-check

// import { slash } from 'gatsby-core-utils';
// import { paginate } from 'gatsby-awesome-pagination';
// import * as path from 'path';

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions: { createPage }, graphql, reporter }): Promise<void> => {

    // Query all the data
    // const { errors, data: { postQueries, catQuery, tagQuery } } = await graphql(`
    //     query WPQuery {
    //         postQueries: allWpPost {
    //             edges {
    //                 node {
    //                     databaseId
    //                     uri
    //                 }
    //                 next {
    //                     databaseId
    //                 }
    //                 previous {
    //                     databaseId
    //                 }
    //             }
    //         }
    //         catQuery: allWpCategory {
    //             nodes {
    //                 databaseId
    //                 uri
    //                 name
    //                 posts {
    //                     nodes {
    //                         databaseId
    //                     }
    //                 }
    //             }
    //         }
    //         tagQuery: allWpTag {
    //             nodes {
    //                 databaseId
    //                 uri
    //                 name
    //                 posts {
    //                     nodes {
    //                         databaseId
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);
    //
    //   if (errors) {
    //       reporter.panic('error loading events', errors);
    //       return;
    //   }
    //
    //   const posts = postQueries.edges;
    //   posts.forEach(post => {
    //       createPage({
    //           path: `/blog${post.node.uri}`,
    //           // path to template
    //           component: path.resolve('./src/templates/post.tsx'),
    //           context: {
    //               // Data passed to context is available
    //               // in page queries as GraphQL variables.
    //               databaseId: post.node.databaseId,
    //               nextId: post.next && post.next.databaseId || null,
    //               prevId: post.previous && post.previous.databaseId || null
    //           }
    //       });
    //   });

    // // Create your paginated pages
    //   paginate({
    //       createPage, // The Gatsby `createPage` function
    //       items: posts, // An array of objects
    //       itemsPerPage: 4, // How many items you want per page
    //       pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    //       component: slash(path.resolve(`./src/templates/blog.tsx`)) // Just like `createPage()`
    //   });

    // // Create your paginated category indexes
    //   const categories = catQuery.nodes;
    //   categories.map(category => {
    //       paginate({
    //           createPage, // The Gatsby `createPage` function
    //           items: category.posts.nodes, // An array of objects
    //           itemsPerPage: 4, // How many items you want per page
    //           pathPrefix: category.uri.slice(0, -1), // Creates pages like `/blog`, `/blog/2`, etc
    //           component: path.resolve(`./src/templates/Categories.tsx`), // Just like `createPage()`
    //           context: {
    //               catId: category.databaseId,
    //               catName: category.name
    //           }
    //       });
    //   });

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
