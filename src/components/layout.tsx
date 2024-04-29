import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { Header } from '@components/header/header';

export const Layout = ({ children }) => {
  return (
      <StaticQuery query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                            name
                            link
                        }
                    }
                }
            }
          `
      } render={({ site }) => (
          <>
              <div className="outer-wrapper">
                  <div className="inner-container">
                      <Header siteTitle={site.siteMetadata.title} menuLinks={site.siteMetadata.menuLinks} />
                      {children}
                  </div>
              </div>
          </>
      )} />
  );
};
