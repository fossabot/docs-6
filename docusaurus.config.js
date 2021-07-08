const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: '渐进式微服务框架',
  tagline: '按需采纳、横向扩展、代码隔离、性能观测、基础服务开箱即用',
  url: 'https://kross.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'krossjs',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  themeConfig: {
    announcementBar: {
      id: 'announcement-2',
      content: 'If you like Kross, give it a star ⭐ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/krossjs/kross">GitHub</a>!',
    },
    navbar: {
      title: 'KROSS',
      logo: {
        alt: 'LOGO',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '快速上手',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: '文档',
        },
        {
          to: '/blog',
          label: 'LIVE',
          position: 'right'
        },
        {
          to: '/blog',
          label: '博客',
          position: 'right'
        },
        {
          href: 'https://github.com/krossjs/kross',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/krossjs/kross',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KROSS Project. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/krossjs/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/krossjs/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
