/**
 * @type {import('gatsby').GatsbyConfig}
 */
import type { PluginRef } from 'gatsby';
import type { GatsbyConfig } from 'gatsby';
import * as path from 'node:path';

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
    graphqlTypegen: true,
    siteMetadata: {
        title: 'Monk\'s Portfolio',
        siteTitle: 'Monk\'s Portfolio',
        siteTitleAlt: 'Monk Wellington',
        siteUrl: 'https://m0nq.github.io',
        siteImage: '',
        description: 'Portfolio with colorful accents. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.',
        siteLanguage: 'en',
        author: 'm0nq',
        menuLinks: [
            {
                name: 'home',
                link: '/'
            },
            {
                name: 'contact',
                link: '/contact'
            },
            {
                name: 'projects',
                link: '/projects'
            },
            {
                name: 'blog',
                link: '/blog'
            }
        ]
    },
    trailingSlash: 'never',
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/smiling_monk.png'
            }
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@utils': path.resolve(__dirname, 'src/utils'),
                    '@data-types': path.resolve(__dirname, 'src/data-types'),
                    '@hooks': path.resolve(__dirname, 'src/hooks'),
                    '@contexts': path.resolve(__dirname, 'src/contexts')
                },
                extensions: []
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Quicksand:300,400,500,600,700', 'Montserrat:100,200,300,400,500,600,700,800,900']
                }
            }
        },
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: process.env.WORDPRESS_URL || 'http://localhost:8080/graphql',
                verbose: true
            }
        }
    ].filter(Boolean) as Array<PluginRef>
};

export default config;
