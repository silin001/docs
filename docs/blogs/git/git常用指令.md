---
title: git常用指令
tags:
 - git常用指令
---
# git代理配置

## 查看当前代理设置
```bash
git config --[global](https://so.csdn.net/so/search?q=global&spm=1001.2101.3001.7020) --get http.proxy

```
## 设置代理
设置当前代理为 `http://127.0.0.1:7890` 或 `socket5://127.0.0.1:7890`
端口根据自己情况来。

- http:  
`git config --global http.proxy 'http://127.0.0.1:1080'
`
- https:  
`git config --global https.proxy 'http://127.0.0.1:1080'
`
- socks5:  
```bash
git config --global http.proxy 'socks5://127.0.0.1:1080'

git config --global https.proxy 'socks5://127.0.0.1:1080' /
```

## 删除代理
`git config --global --unset https.proxy`

# 关联仓库 

- 关联上游仓库
```
git remote add upstream xxxx
```
- 更新合并上游仓库

```
git fetch upstream 
git merge upstream/上游具体分支名称
```
## 本地关联、修改、删除远程仓库

- 关联远程仓库
`git remote add origin xxx`

- 修改远程仓库地址
`git remote set-url origin xxx.git`

- 删除关联的远程仓库
`git remote rm origin`



# Git-忽略规则(.gitignore配置）不生效原因和解决
原因是因为在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的。  

解决方法:   

git清除本地缓存（改变成未track状态），然后再提交
`git rm -r --cached .`
`git add .`

# 分支

# 分支同步问题

情况：  
两台机器用同一个远程仓库，在a机器上clone到代码后本地创建一个a1分支进行开发后提交分支到远程仓库。

b机器拉到代码后，此时b机器本地是没有a机器提交的分支的，怎么获取呢？

- 直接在本地切换远程分支就会自动创建和同步远程分支
`git checkout a1`

或
- 本地直接创建并且切换到新分支
`git checkout -b a1 origin a1`


## 查看分支

- 查看所有分支
- `git branch -a`
- 查看远程分支
`git branch -r`

## 创建分支

- 创建分支、切换分支
```
git branch xxx
git checkout xxx
```
- 创建分支且切换到新分支

`git checkout -b xxx`


## 删除分支
- 删除本地分支  
`git branch -d xxx分支`
当一个分支被推送并合并到远程分支后，`-d` 才会本地删除该分支。如果一个分支还没有被推送或者合并，那么可以使用`-D`强制删除它。

- 删除远程分支  
`git push origin --delete xxx分支名称`

## 分支覆盖

- 放弃本地修改，用远程分支覆盖本地分支  

```bash
git fetch --all
git reset --hard origin/master (这里master为对应的分支名)
git pull
```
- 强制覆盖远程分支

`git push origin 分支名 --force`

# 版本回退

- 回退指定版本（直接回退到指定版本，目标版本之后的提交将被删除）
`git log` 查看提交日志

`git reset –hard 版本号`

