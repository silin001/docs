# vuePress

基于vuePress开发个人文档系统

## 部署到自己的 github pages


- CICD（推荐）

已配置完成CICD，当push代码后会进行自动部署。

部署完成后（大约2分钟）访问：

[github线上地址](https://silin001.github.io/docs)
[gitee线上地址](https://silin001.github.io/docs)


- 手动部署（半自动）

 必须在git bash中执行终端执行命令： `yarn d`， 触发 .sh 脚本发布部署。

 ps：
 无论是 windows cmd 还是 powershell，都无法直接运行 bash 脚本文件
 cmd中执行报错：  `Enter: command not found`

不推荐，部署完gitee仓库还需要手动发布更新。

## 同步gitee及自动更新gitee pages

已实现使用actions同步代码到gitee对应仓库，且自动部署gitee pages




