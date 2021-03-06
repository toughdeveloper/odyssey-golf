module.exports = {
    siteMetadata: {
        title: `Golf Odyssey`,
        description: `Golf Odyssey`,
        author: `@golfodyssey`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
            },
        },
        'gatsby-plugin-react-svg',
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
                name: `golf-odyssey`,
                short_name: `home`,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#000`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://cookridgehall.us7.list-manage.com/subscribe/post?u=8cd676a43cc44689cba5a5626&amp;id=22d2a3d716', // see instructions section below
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        'gatsby-plugin-offline',
    ],
}
