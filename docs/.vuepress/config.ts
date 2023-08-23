// CommonJS 模块使用 require() 和 module.exports
// ES6 模块使用 import 和 export 。
// const { recoTheme } = require("vuepress-theme-reco");
// import { defineUserConfig } from "vuepress";
console.log('ts config')
import { recoTheme } from "vuepress-theme-reco";
// export default defineUserConfig({
  module.exports = {
  title: "sts1",
  description: "尖椒土豆sss的博客",
  port: 3333,
  base: "/docs/",
  // publicPath: '/sl/',
  // 默认 /  https://<USERNAME or GROUP>.github.io/
  // 如果你打算发布到 https://<USERNAME or GROUP>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
  // base: '/docs/',
  // base: '/',
  theme: recoTheme({
    type: "blog",
    author: "尖椒土豆sss",
    logo: "/img/avatar.png",
    authorAvatar: "/img/avatar.png",
    colorMode: "dark", // dark, light
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: "文章分类", // 默认 categories
      tagText: "标签", // 默认 tags
    },
    // 自动设置系列
    // autoSetSeries: true,
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,
    // 导航栏配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "工具链接",
        icon: "Link",
        children: [
          { text: "工具箱", link: "http://tool.mkblog.cn/" },
          { text: "百度一下", link: "https://www.baidu.com/" },
        ],
      },
      {
        text: "官方文档",
        icon: "Document",
        children: [
          { text: "vue2官网", link: "https://v2.cn.vuejs.org/" },
          { text: "vue3官网", link: "https://cn.vuejs.org/" },
        ],
      },
      // {
      //   text: 'Vue相关',
      //   icon: 'LogoVue',
      //   children: [
      //     {
      //       text: 'vue2相关',
      //       children: [
      //         {
      //           text: 'vue2.0相关实现原理记录',
      //           link: '/blogs/vue2/vue2相关实现原理.md'
      //         }
      //       ]
      //     },
      //     // {
      //     //   text: 'vue3相关',
      //     //   children: [
      //     //     {
      //     //       text: 'vue3xxx',
      //     //       link: '/vue/vue2/ym01'
      //     //     }
      //     //   ]
      //     // }
      //   ]
      // },
      {
        text: "关于我",
        icon: "UserAvatarFilledAlt",
        children: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/2041110775208184/posts",
          },
          // {
          //   text: 'GitHub',
          //   link: 'https://github.com/silin001'
          // },
        ],
      },
    ],
  }),
  }
// });
