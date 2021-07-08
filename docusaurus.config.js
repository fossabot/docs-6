const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'Kross',
  tagline: '渐进式微服务框架',
  url: 'https://kross.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'krossjs',
  projectName: 'docs',
  themeConfig: {
    image: 'imgs/logo.png',
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
      logo: {
        src: 'img/logo-dark.png',
        alt: 'Kross Logo',
        href: 'https://github.com/krossjs/kross',
      },
      links: [
        {
          title: 'LIVE',
          items: [
            {
              label: 'Kross Live',
              to: 'https://kross.live',
            },
          ],
        },
        {
          title: '社区&支持',
          items: [
            {
              label: 'Slack',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: '技术支持',
              href: 'mailto:service@lucky-byte.com',
            },
          ],
        },
        {
          title: '开源',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/krossjs/kross',
            },
            {
              label: '行为准则',
              href: 'https://github.com/krossjs/kross/blob/main/CODE_OF_CONDUCT.zh_CN.md',
            },
          ],
        },
        {
          title: '赞助',
          items: [
            {
              label: '贡献代码',
              href: 'https://allcontributors.org/docs/zh-cn/overview',
            },
            {
              label: 'Buy Me a Coffee',
              href: '/donate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kross Project.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'javascript',
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
