module.exports = {
  siteMetadata: {
    title: `Gatsby PWA Project`,
    description: `A test project using Gatsby to test out a PWA, with offline support and push notifications.`,
    author: `@thewagener`,
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
        name: `gatsby-pwa-test`,
        short_name: `Gatsby PWA Test`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
{
    resolve: `gatsby-plugin-firebase-messaging`,
    options: {
      //required unless removeFirebaseServiceWorker == true
      config: { 
        apiKey: '111111111111111111111',
        appId: '111111111111111111111',
        messagingSenderId: '111111111111111111111',
        projectId: 'gatsby-pwa-test-project',
      },
      //both of these are optional
     // disableDevelopment: true, //disables development service worker
     // removeFirebaseServiceWorker: true, //tells plugin to help unregistering/removing
    },
  },
  ],
}
