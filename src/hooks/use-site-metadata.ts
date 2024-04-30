import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
      query SiteMetadataQuery {
          site {
              siteMetadata {
                  title
                  siteTitle
                  siteTitleAlt
                  siteUrl
                  siteDescription
                  siteImage
                  siteLanguage
                  author
                  menuLinks {
                      name
                      link
                  }
              }
          }
      }
  `);

    return site.siteMetadata;
};
