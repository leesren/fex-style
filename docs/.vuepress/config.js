module.exports = {
  title: '前端技术文档库',
  description: '前端不规范,运营两行泪',
  port: 8080,
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    nav: [{ text: '指南', link: '/' }, { text: '快速上手', link: '/start/' }],
    sidebar: {
      // '/guide/': [
      //   {
      //     title: '指南',
      //     collapsable: false,
      //     children: [
      //       'getting-started',
      //       'examples-and-boilerplates',
      //       'concepts',
      //       'introduce-class'
      //     ]
      //   },

      //   {
      //     title: '重构&前端', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     children: [
      //       'restructure-frontend-rules-choice',
      //       'restructure-frontend-shape-screen',
      //       'restructure-frontend-rules-html',
      //       'restructure-frontend-rules-css',
      //       'restructure-frontend-rules-js',
      //       'restructure-frontend-rules-vue'
      //     ]
      //   }
      // ],

      '/start/': [
        {
          title: '快速上手',
          collapsable: false,
          path: '',
          children: [
            '',
            'restructure-frontend-rules-choice',
            'restructure-frontend-shape-screen',
            'restructure-frontend-rules-html',
            'restructure-frontend-rules-css',
            'restructure-frontend-rules-js',
            'restructure-frontend-rules-vue'
          ]
        },
        {
          title: '页面规范',
          collapsable: true,
          path: 'page-guide',
          children: [
            'page-guide-header',
            'page-guide-css',
            'page-guide-name',
            'page-guide-dir',
            'page-guide-img',
            'page-guide-sta',
            { title: '----PC端----' },
            'page-guide-pc-compatible',
            'page-guide-pc-share',
            { title: '----移动端----' },
            'page-guide-mobile-design',
            'page-guide-mobile-font',
            'page-guide-mobile-rem',
            'page-guide-mobile-compatible',
            'page-guide-mobile-media'
          ]
        },
        {
          title: '工具/系统',
          collapsable: true,
          path: 'tools',
          children: ['cdn', 'img-press']
        },
        {
          title: '特殊规范',
          collapsable: true,
          path: 'spec',
          children: ['spec-concheck']
        },
        {
          title: '扩展阅读',
          collapsable: true,
          path: 'reading-more',
          children: [
            'safe',
            'performance',
            'viewport',
            'mobile-response',
            'mobile-event',
            'style-guide-airbnb-js',
            'style-guide-react',
            'style-guide-vue2',
            'style-guide-angular',
            'style-guide-ts',
            'style-guide-You-Dont-Know-JS',
            'style-guide-cache',
            'style-guide-chrome-devtools',
            'style-guide-input',
            'style-guide-error'
          ]
        },

        {
          title: '前端导航',
          path: 'fe-nav'
        },
        {
          title: '更新日志',
          path: 'change-log'
        }
      ]
    },
    lastUpdated: '上次更新: ' // string | boolean
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/plugin-active-header-links',
    '@vuepress/plugin-pwa',
    '@vuepress/plugin-nprogress'
  ]
};
