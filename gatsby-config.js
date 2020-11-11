/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: `./config/.env` });
const themeOptions = require('./config/theme');

module.exports = {
  pathPrefix: '/docs',
  siteMetadata: {
    title: 'Apollo Docs',
    siteName: 'Apollo Docs',
    version: `#${process.env.GIT_HASH || 'latest'}`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Apollo Basics',
        description: 'A guide to using Apollo Docs',
        defaultVersion: '2',
        algoliaApiKey: process.env.ALGOLIA_API_KEY || 'key',
        algoliaIndexName: process.env.ALGOLIA_INDEX_NAME || 'index',
        sidebarCategories: {
          null: ['index'],
          Tutorial: [
            'tutorial/introduction',
            'tutorial/schema',
            'tutorial/data-source',
            'tutorial/resolvers',
            'tutorial/mutation-resolvers',
            'tutorial/production',
          ],
          'Development Tools': [
            'devtools/cli',
            'devtools/editor-plugins',
            'devtools/apollo-config',
          ],
          Resources: [
            '[Principled GraphQL](https://principledgraphql.com)',
            'resources/graphql-glossary',
            'resources/faq',
          ],
        },
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
