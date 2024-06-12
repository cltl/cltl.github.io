// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The CLTL archive',
  tagline: 'All our repositories in a few clicks',
  favicon: 'img/siteicon.png',

  // Set the production url of your site here
  url: 'https://cltl.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cltl', // Usually your GitHub org/user name.
  projectName: 'cltl.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/siteicon.svg',
      navbar: {
        title: 'The CLTL archive',
        logo: {
          alt: 'CLTL logo',
          src: 'img/siteicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar',
            position: 'right',
            label: 'Research',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'right',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'right',
            label: 'Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'teachingSidebar',
            position: 'right',
            label: 'Teaching',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cltlSidebar',
            position: 'right',
            label: 'CLTL',
          },
          {
            href: 'https://github.com/cltl/cltl.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} CLTL. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
