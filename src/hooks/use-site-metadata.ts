import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
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
      }
  `);

    return site.siteMetadata;
};
