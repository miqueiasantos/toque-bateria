module.exports = {
  pathPrefix: '/toque-bateria',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
