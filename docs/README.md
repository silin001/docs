---
home: true
modules: # 指定首页展示模块
  - Banner
  # - bannerBrand
  # - Blog
  - MdContent
  - Footer
banner: # banner 模块的配置
  heroText: test
  tagline: Enjoy when you can, and endure when you must.
  # heroImage: /img/logo.png
  # heroImageStyle:
  #   maxWidth: 200px
  #   margin: 0 auto 2rem
  bgImage: /img/bg.svg
  bgImageStyle:
    height: 100vh
bannerBrand: # bannerBrand 模块的配置
  title: vuepress-reco
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/theme/introduce', type: 'plain' }
  socialLinks: # 社交地址
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }

blog: # blog 模块的配置
  socialLinks: # 社交地址
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }

footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
---

<!-- 首页配置页 -->
