require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Jakub Biesiada – Portfolio`,
    description: `JavaScript Developer Portfolio`,
    author: `Jakub Biesiada`,
    siteUrl: `https://jb1905.github.io`,
    keywords: [
      "front end",
      "biesiada",
      "jakub",
      "javascript",
      "developer",
      "react",
    ],
  },
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  pathPrefix: `/portfolio`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-graphql-codegen`,
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
        component: `${__dirname}/src/components/layout/index.tsx`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMS`,
        fieldName: `graphCmsData`,
        url: process.env.GRAPHCMS_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
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
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: [`src/**/*.scss`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jakub Biesiada - Portfolio`,
        short_name: `Jakub Biesiada`,
        start_url: `/`,
        background_color: `#2d2faf`,
        theme_color: `#2d2faf`,
        display: `standalone`,
        icon: `static/favicon.ico`,
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
        display: `swap`,
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
