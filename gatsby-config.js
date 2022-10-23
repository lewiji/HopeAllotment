/* eslint-disable no-undef */
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const fullConfig = resolveConfig(tailwindConfig);


module.exports = {
  pathPrefix: "/HopeAllotment",
  siteMetadata: {
    title: `HOPE Community Allotment`,
    description: `Home of the HOPE community allotment project, Sheffield, UK.`,
    author: `HOPE Community Allotment`,
    siteUrl: `https://hopeallotment.org.uk`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
         "markdown-pages": require.resolve("./src/layouts/pageLayout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require('./src/utils/link_resolver').linkResolver,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `pages`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
   `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HOPE Community Allotment`,
        short_name: `HOPE`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal,
        display: `minimal-ui`,
        icon: `src/images/bigleaf.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`, 
    `gatsby-plugin-meta-redirect`,
  ],
};
