import type { GatsbyConfig, PluginRef } from 'gatsby';
import 'dotenv/config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
    pathPrefix: '/portfolio',
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // You can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
        title: 'Monk Wellington',
        siteTitle: 'Monk Wellington',
        siteTitleAlt: 'Monk Wellington',
        siteUrl: 'https://m0nq.github.io/portfolio',
        siteDescription: `Portfolio with colorful accents. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        siteImage: '/banner.jpg',
        siteLanguage: 'en',
        author: '@m0nq'
    },
    trailingSlash: 'never',
    plugins: [
        {
            resolve: '@lekoarts/gatsby-theme-jodie',
            // See the theme's README for all available options
            options: {
                navigation: [
                    { name: `About`, slug: `/about` },
                    { name: `Projects`, slug: `/projects` },
                    { name: `Blog`, slug: `/blog` }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Portfolio of Monk Wellington',
                short_name: 'Monk\'s Portfolio',
                description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#b75e09`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        },
        // You can remove this plugin if you don't need it
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-statoscope`,
            options: {
                saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
                saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
                open: false
            }
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
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
        }
    ].filter(Boolean) as Array<PluginRef>
};

export default config;
