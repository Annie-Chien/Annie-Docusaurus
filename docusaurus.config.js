// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnnieAnny',
  url: 'https://annie-chien.github.io', // Set the production url of your site here
  organizationName: 'Annie-Chien', // Usually your GitHub org/user name.
  projectName: 'Annie-Docusaurus', // Usually your repo name.
  favicon: 'img/favicon.ico',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Annie-Docusaurus/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['en', 'zh-Hant-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },

      // Replace with your project's social card'
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "AnnieAnny's",
        hideOnScroll: true,
        items: [
          { to: 'about', label: 'ABOUT', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'right',
            label: 'NOTE',
          },
          {
            href: 'https://github.com/Annie-Chien',
            label: 'Github',
            position: 'right',
            target: '_blank',
          },
          {
            href: 'https://medium.com/@annie.chien105',
            label: 'Medium',
            position: 'right',
            target: '_blank',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
