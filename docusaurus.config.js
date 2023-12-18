// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnnieAnny',
  url: 'https://annie-chien.github.io',
  organizationName: 'Annie-Chien',
  projectName: 'Annie-Docusaurus',
  favicon: 'img/favicon.ico',
  baseUrl: '/Annie-Docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  /* ---------------------- Language ---------------------- */
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      }),
    ],
  ],

  /* ------------------------ Theme ----------------------- */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      prism: {
        defaultLanguage: 'javascript',
      },
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
    }),
  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
