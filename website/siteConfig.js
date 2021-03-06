/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Open Systems Pharmacology Suite' /* title for your website */,
  tagline: '',
  url: 'https://osp-docusaurus.netlify.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  editUrl: 'https://github.com/bocasfx/osp-docusaurus/tree/edit/docs/',
  headerLinks: [
    {doc: 'about', label: 'Documentation'},
    { search: true }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/osp_logo_small.png',
  footerIcon: 'img/osp_logo_small.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#333',
    secondaryColor: '#666',
  },
  algolia: {
    apiKey: '79665c9eade0a0ad6f55bb13f75be439',
    indexName: 'getstarted_actors'
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  organizationName: 'bocasfx', // or set an env variable ORGANIZATION_NAME
  projectName: 'osp-docusaurus', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: [],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: '',
};

module.exports = siteConfig;
