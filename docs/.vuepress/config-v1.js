module.exports = {
  title: 's',
  description: '尖椒土豆sss的博客',
  port: 3333,
  // publicPath: '/sl/',

  // 默认 /  https://<USERNAME or GROUP>.github.io/
  // 如果你打算发布到 https://<USERNAME or GROUP>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
  base: '/docs/',

  head: [ // 注入到当前页面的 HTML <head> 中的标签
    // ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  // 主题
  theme: 'reco',
  themeConfig: {
    type: "blog",
    // author: "尖椒土豆sss",
  // logo: "/avatar.jpg",
  // authorAvatar: "/avatar.jpg",
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,
    // 子侧边栏
    // subSidebar: 'auto',
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
        text: '关于我',
        items: [
          { text: '格言', link: '/my/my' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/2041110775208184/posts'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/silin001'
          },
        ]
      },
    ],
    // sidebar: 'auto', // 侧边栏配置
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "技术博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
  }
};