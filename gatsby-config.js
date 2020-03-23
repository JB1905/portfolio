module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `JavaScript Developer Portfolio`,
    author: `Jakub Biesiada`,
    siteUrl: `https://jb1905.github.io`,
  },
  pathPrefix: `/portfolio`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMS`,
        fieldName: `graphCmsData`,
        url: `https://api-euwest.graphcms.com/v1/cjtelsg9a6s8o01b92pe3zzbt/master`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: `${__dirname}/src/**/*.{tsx,ts}`,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: [`src/**/*.scss`] },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/languages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jakub Biesiada - Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto:400,500,700,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
