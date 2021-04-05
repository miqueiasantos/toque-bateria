module.exports = {
    siteMetadata: {
        title: `Toque Bateria`,
        description: `Conheça o maior curso online de bateria do Brasil`,
        author: `@vitor_lambert_`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Toque Bateria`,
                short_name: `Toque Bateria`,
                start_url: `/`,
                background_color: `#5B8888`,
                theme_color: `#5B8888`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    '~/components': 'src/components/',
                    '~/pages': 'src/pages/',
                    '~/styles': 'src/styles/',
                    '~/images': 'src/images/',
                    '~/sections': 'src/sections/',
                },
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                // offset: -100,
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "231931754897046",
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "UA-110609333-1", // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}