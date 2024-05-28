import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export const useWPPostQuery = () => {
  const data = useStaticQuery(graphql`
      query WPPostQuery($databaseId: Int!, $nextId: Int, $prevId: Int) {
          site {
              siteMetadata {
                  title
                  menuLinks {
                      name
                  }
              }
          }
          post: wpPost(databaseId: { eq: $databaseId }) {
              date
              databaseId
              title
              content
              uri
              author {
                  node {
                      name
                  }
              }
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
                      altText
                      localFile {
                          childImageSharp {
                              gatsbyImageData(width: 1360, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                          }
                      }
                  }
              }
          }
          nextPost: wpPost(databaseId: { eq: $nextId }) {
              title
              uri
          }
          prevPost: wpPost(databaseId: { eq: $prevId }) {
              title
              uri
          }
      }
  `);

    return data;
};
