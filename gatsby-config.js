module.exports = {
  siteMetadata: {
    title: `SEO BOSS`,
    description: `Coming soon`,
    author: `@gatsbyjs`,
    siteUrl: 'https://www.seoboss.rs'
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-robots-txt`,
    {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: 'https://www.seoboss.rs',
      sitemap: 'https://www.seoboss.rs/sitemap.xml',
      policy: [{ userAgent: '*', disallow: '/' }]
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
