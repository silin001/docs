module.exports = {
  title: 'S.',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {
        text: '概述',
        link: '/'
      },
      {
        text: 'Vue2 相关',
        items: [
          { text: 'vue2源码探秘', link: '/blogs/vue/vue2/ym01' }, // 可不写后缀 .md
          { text: '百度一下', link: 'https://www.baidu.com/' },
          // { text: '', link: '' }// 外部链接
        ]
      },
      {
        text: 'vue2源码探秘',
        link: '/blogs/vue/vue2/ym01'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/silin001/'
      },
    ],
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级

    //左侧列表
    sidebar: {
      '/blogs/vue/vue2/': [
        {
          // title: '测试1',
          children: ['ym01']
        }
      ],
      // '/guide/ts/': [
      //     {
      //         title: 'Typescript 学习',
      //         collapsable: true,
      //         children: ['test01', 'test02', 'test03']
      //     }
      // ],
      '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    }
  },
};