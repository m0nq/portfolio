import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export const useSiteQueryData = () => {
  const result = useStaticQuery(graphql`
      query SiteMetadataQuery {
          site {
              siteMetadata {
                  author
                  description
                  menuLinks {
                      name
                      link
                  }
                  title
                  siteTitle
                  siteTitleAlt
                  siteUrl
                  siteImage
                  siteLanguage
              }
          }
          allImages: allImageSharp {
              nodes {
                  original {
                      src
                  }
                  gatsbyImageData
              }
          }
      }
  `);

    return result;
};
