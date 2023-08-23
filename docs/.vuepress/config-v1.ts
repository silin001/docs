import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
export default defineUserConfig({
  title: "sss",
  port: 3333,
  base: "/docs/",
  theme: recoTheme({
    type: "blog",
    author: "尖椒土豆sss",
    logo: "/img/avatar.png",
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: "文章分类", // 默认 categories
      tagText: "标签", // 默认 tags
    },
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
      {
        text: "关于我",
        icon: "UserAvatarFilledAlt",
        children: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/2041110775208184/posts",
          },
        ],
      },
    ],
  }),
})
