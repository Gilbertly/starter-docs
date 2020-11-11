const navConfig = {
  'Apollo Basics': {
    category: 'Core',
    url: 'https://www.apollographql.com/docs',
    description:
      'Learn about each part of the Apollo platform and how they all work together.',
    omitLandingPage: true,
  },
  'Apollo Client (React)': {
    category: 'Apollo Client',
    shortName: 'React / JS',
    url: 'https://www.apollographql.com/docs/react',
    description:
      "Manage the entirety of your React app's state and seamlessly execute GraphQL operations.",
  },
  'Apollo Client (iOS)': {
    category: 'Apollo Client',
    shortName: 'iOS',
    url: 'https://www.apollographql.com/docs/ios',
    description:
      "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations.",
  },
  'Apollo Client (Android)': {
    category: 'Apollo Client',
    shortName: 'Android',
    url: 'https://www.apollographql.com/docs/android',
    description:
      "Manage the entirety of your Android app's state and seamlessly execute GraphQL operations.",
  },
  'Apollo Server': {
    category: 'Backend',
    url: 'https://www.apollographql.com/docs/apollo-server',
    description:
      'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.',
  },
  'Apollo Federation': {
    category: 'Backend',
    url: 'https://www.apollographql.com/docs/federation',
    description: 'Implement a single data graph across multiple services.',
  },
  'Apollo Studio': {
    category: 'Tools',
    url: 'https://www.apollographql.com/docs/graph-manager',
    description:
      'Build your graph with your team, evolve it safely, and keep it running smoothly.',
  },
};

const footerNavConfig = {
  Blog: {
    href: 'https://blog.apollographql.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  Changelog: {
    href: 'https://www.apollographql.com/docs/community/',
  },
};

module.exports = {
  siteName: 'Apollo Docs',
  menuTitle: 'Apollo Platform',
  baseUrl: 'https://www.apollographql.com',
  twitterHandle: 'apollographql',
  githubRepo: 'apollographql/apollo',
  logoLink: 'https://www.apollographql.com/docs/',
  navConfig,
  footerNavConfig,
};
