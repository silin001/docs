---
title: plugin-zip-pack插件
date: 2023-09-27
sticky: 1 # 文章排序
tags:
 - 插件
---

## 介绍

`plugin-zip-pack` 该插件用于项目的 webpack、vite build 结束后压缩指定目录资源为.zip 包。

[plugin-zip-pack - npm (npmjs.com)](https://www.npmjs.com/package/plugin-zip-pack)

## 安装

`cnpm install plugin-zip-pack -D`

`npm install plugin-zip-pack -D`

## 使用


- vite

```javascript
// vite.config.js
const { vitePluginZipPack } = require("plugin-zip-pack");
export default defineConfig({
  plugins: [
    vitePluginZipPack(),
    // vitePluginZipPack({
    //   optZipName: '测试包',
    //   targetDir: 'public',
    //   enable: false
    // }),
  ],
});
```

- webpack

```javascript
// webpack.config.js
const { WebpackPluginZipPack } = require("plugin-zip-pack");

module.exports = {
    configureWebpack: {
        plugins: [
            new WebpackPluginZipPack({
                optZipName: 'xxxpc端'
            })
        ]
    }
};
```
