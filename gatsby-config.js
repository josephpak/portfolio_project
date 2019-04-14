module.exports = {
  siteMetadata: {
    title: `Joe Pak`,
    description: `Hi, I'm Joe Pak. This is my personal portfolio site.`,
    author: `@josephpak`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joe Pak's Personal Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#1F4955`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137907904-1",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // icon: `src/images/profile.jpg`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',

    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`, 
    `gatsby-transformer-json`,
  ],
  mapping: {
    'ProjectsJson.technologies': `TechnologiesJson`
  }
}
