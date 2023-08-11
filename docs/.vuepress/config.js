module.exports = {
  title: 'S.',
  description: '我的个人网站',
  // publicPath: '/sl/',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: './', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档相关',
        items: [
          { text: 'vue2官网', link: 'https://v2.cn.vuejs.org/' },
          { text: 'vue3官网', link: 'https://cn.vuejs.org/' },
          { text: '百度一下', link: 'https://www.baidu.com/' },
        ]
      },
      {
        text: 'Vue2 相关',
        items: [
          { text: 'vue2源码探秘', link: '/vue/vue2/ym01' }
        ]
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/2041110775208184/posts'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/silin001'
      },
      {
        text: '关于我',
        link: '/my/my'
      },
    ],
    sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
    // sidebar: false,
    // sidebar: [
      // {
      //   title: '软件资源11',
      //   children: ['/软件资源/软件资源'],
      //   initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      // }
    // ]
    // sidebar: {
    //   '/': [
    //     {
    //       title: '测试目录1',
    //     },
    //     {
    //       title: '测试目录2',
    //       children: [
    //         {
    //           title: '333'
    //         }
    //       ]
    //     },
    //   ],
    //   '/vue相关/vue2/': [
    //     {
    //       title: '22',
    //     }
    //   ],
    // }
  }
};