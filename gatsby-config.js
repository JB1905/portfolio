const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `JavaScript Developer Portfolio`,
    author: `Jakub Biesiada`,
    siteUrl: `https://jb1905.github.io`
  },
  pathPrefix: `/portfolio`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/images`)
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout`
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        components: path.join(__dirname, `src/components`),
        context: path.join(__dirname, `src/context`),
        pages: path.join(__dirname, `src/pages`),
        src: path.join(__dirname, `src`)
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMS`,
        fieldName: `graphCmsData`,
        url: `https://api-euwest.graphcms.com/v1/cjtelsg9a6s8o01b92pe3zzbt/master`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.ico`
      }
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: path.join(`${__dirname}/src/**/*.js`),
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: [`src/**/*.scss`] }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/languages/`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`, `latin-ext`],
            variants: [`400`, `500`, `700`, `900`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/
        }
      }
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
        icon: `src/images/favicon.ico`
      }
    }
  ]
};
