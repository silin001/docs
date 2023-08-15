#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '手动部署'

# 发布到gh-pages分支
git push -f git@github.com:silin001/docs.git main:gh-pages

# 这里部署到gitee后 还需要去gitee对应仓库pages中手动更新，因为自动更新需要开通pro服务
git push -f git@gitee.com:sisi001/docs.git main:gh-pages

# cd ../ && rm -rf dist