import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { DataProps } from '@data-types/data-props';

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
      } render={({ site: { siteMetadata } }: DataProps) => {
          return (
              <>
                  <head>
                      <title>{siteMetadata.title}</title>
                  </head>
                  <div className="outer-wrapper">
                      <div className="inner-container">
                          <Header siteTitle={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
                          {children}
                          <Footer />
                      </div>
                  </div>
              </>
          );
      }} />
  );
};
