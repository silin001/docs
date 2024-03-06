---
title: plugin-zip-pack插件
date: 2023-09-27
sticky: 1 # 文章排序
tags:
 - 插件
---

## 介绍

`plugin-zip-pack` 源码使用ts编写（1.0.17版本前js），用于项目 webpack、vite build 结束后压缩打包指定目录资源为.zip 包

npm包地址：
[plugin-zip-pack - npm (npmjs.com)](https://www.npmjs.com/package/plugin-zip-pack)


## 安装

`cnpm install plugin-zip-pack -D`

or

`npm install plugin-zip-pack -D`

## 参数配置

```javascript

 {
  optZipName: '测试包', // 必传参数，打包名称，
  targetDir: '', // 可选参数，需要打包的目录（必须传入存在的目录），默认 dist
  enable: true // 可选参数，插件是否开启，默认true开启
 },

```


## 使用（1.0.17版本）

- vite

```javascript
// vite.config.js
const { pluginZipPackVite } = require("plugin-zip-pack");
// import { pluginZipPackVite } from 'plugin-zip-pack'
export default defineConfig({
  plugins: [
    pluginZipPackVite({
      optZipName: '测试包',
    }),
  ],
});
```

- webpack

```javascript
// webpack.config.js
const { PluginZipPackWebpack } = require("plugin-zip-pack");

module.exports = {
    configureWebpack: {
        plugins: [
            new PluginZipPackWebpack({
                optZipName: 'xxxpc端'
            })
        ]
    }
};
```


# 使用（1.0.17版本前）

- vite

```javascript
// vite.config.js
const { vitePluginZipPack } = require("plugin-zip-pack");
export default defineConfig({
  plugins: [
    vitePluginZipPack({
      optZipName: '测试包',
      targetDir: 'public',
      enable: false
    }),
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


