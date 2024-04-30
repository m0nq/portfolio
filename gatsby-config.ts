/**
 * @type {import('gatsby').GatsbyConfig}
 */
import type { PluginRef } from 'gatsby';
import type { GatsbyConfig } from 'gatsby';
import 'dotenv/config';
import * as path from 'node:path';

const config: GatsbyConfig = {
    pathPrefix: '/portfolio',
    siteMetadata: {
        title: 'Monk\'s Portfolio',
        siteTitle: 'Monk\'s Portfolio',
        siteTitleAlt: 'Monk Wellington',
        siteUrl: 'https://m0nq.github.io/portfolio',
        siteDescription: `Portfolio with colorful accents. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        siteImage: '/banner.jpg',
        siteLanguage: 'en',
        author: 'Monk Wellington',
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
                name: 'about',
                link: '/about'
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
                'icon': 'src/images/icon.png'
            }
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'images',
                'path': './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'pages',
                'path': './src/pages/'
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
                    '@hooks': path.resolve(__dirname, 'src/hooks')
                },
                extensions: []
            }
        },
        'gatsby-plugin-react-helmet'
    ].filter(Boolean) as Array<PluginRef>
};

export default config;
