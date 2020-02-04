# official-shop

> A Vue.js project
> 这是一个企业官网+新闻+电子商城的综合项目，重点编写电子商城

## Build Setup

``` bash
# install dependencies
# 第一步，使用下面命令。安装依赖
>方法一使用淘宝镜像
1.npm config set registry https://registry.npm.taobao.org
2.npm install
>方法二使用cnpm，设置淘宝镜像
1.npm install -g cnpm --registry=https://registry.npm.taobao.org
2.cnpm install

# serve with hot reload at localhost:8080
# 第二步，输出下面命令，运行项目 访问地址localhost:8080
npm run dev

# build for production with minification
# 输入下面命令打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

纯Vue手工制作，使用ElementUI.以及路由vue-router，axios等技术综合
项目远程仓库地址：https://github.com/tohuzheng/officialAndShop

#目录结构
|--build  组建项目的配置文件，webpack配置文件等
|--config  项目开发的配置文件
|--node_modules  npm安装的依赖
|--src 项目开发源码
   |--api  请求后台api，本项目暂时没用
   |--assests  静态文件，主要是图片
   |--components  组件，小的组件都在这里
   |--lib  其他依赖，本项目是登录加密工具的依赖
   |--pages  页面组件，主要是页面，把小的组件组建成页面
      |--news 新闻系统相关的页面组件
      |--official  官网系统相关的页面组件，刚开始把小组件也放到了这里
      |--shop  商城系统相关的组件
   |--router  路由文件
   |--server  请求后台js
   |--utils  工具js
   |--App.vue  路由视图展现的地方，开发开始的地方
   |--main.js  入口文件，全局配置都在这里
|--static 静态文件，本项目没用上
|--index.html 项目入口文件，虚拟DOM挂载的地方
|--package.json 项目信息文件，包含npm依赖安装记录，作者信息等


#Vue项目开发理解
1.这就是传说中的开页面应用开发
2.整个项目只有main.js这里new了一个Vue实例，只有router文件夹下的index.js里面new了一个router实例，其他都是数据导出
3.Vue组件式开发需要了解一些ES6的语法


#项目二次开发注意事项
1.需要安装nodejs环境

#重新开发：Vue-cli3快速搭建步骤
1.安装node js
  下载地址：http://nodejs.cn/download/
2.node -v查看node安装版本，npm -v 查看npm版本，检验是否安装成功
3.注册cnpm来代替npm
　使用命令：npm install cnpm -g --registry=https://registry.npm.taobao.org
  如果你发现你安装成功了，使用cnpm却发现找不到命令，那么就是你的环境变量有问题，在环境变量里面的path添加你node的安装路径就行，比如";C:\Program Files\nodejs\node_modules"
4.安装vue脚手架vue-cli
　命令：cnpm install -g vue-cli  安装成功后可以用 vue -V 查看vue版本
5.cd到对应的目录下初始化vue项目
　命令：vue init webpack my-project
　　　　Project name 项目名 
　　　　Project description 项目名描述 
　　　　Author 作者邮箱 
　　　　Use ESLint to lint your code? 是否需要ESlist语法检查 
　　　　Setup unit tests with Karma + Mocha? 是否需要单元测试 
　　　　Setup e2e tests with Nightwatch? Yes是否需要e2e测试 
6.package.json为项目依赖资源，如果要运行这个项目需要使用cnpm install安装依赖项（直接在项目文件夹路径下执行）
7.使用命令cnpm run dev启动项目，浏览器会打开 http://localhost:8080/#/ 看到vue的log页面
8.编译打包 cnpm run build

#备注
### 常用Git命令清单

#### 一、新建代码库

###### 在当前目录新建一个Git代码库

`git init`

###### 新建一个目录，将其初始化为Git代码库

`git init [project-name]`

###### 下载一个项目和它的整个代码历史

`git clone [url]`

#### 二、配置

###### Git的设置文件为 .gitconfig ，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

###### 显示当前的Git配置

`git config --list`

###### 编辑Git配置文件

`git config -e [--global]`

###### 设置提交代码时的用户信息

`git config [--global] user.name "[name]"`

`git config [--global] user.email "[email address]"`

#### 三、增加/删除文件

###### 添加指定文件到暂存区

`git add [file1] [file2] ...`

###### 添加指定目录到暂存区，包括子目录

`git add [dir]`

###### 添加当前目录的所有文件到暂存区

`git add .`

###### 添加每个变化前，都会要求确认

###### 对于同一个文件的多处变化，可以实现分次提交

`git add -p`

###### 删除工作区文件，并且将这次删除放入暂存区

`git rm [file1] [file2] ...`

###### 停止追踪指定文件，但该文件会保留在工作区

`git rm --cached [file]`

###### 改名文件，并且将这个改名放入暂存区

`git mv [file-original] [file-renamed]`

#### 四、代码提交

###### 提交暂存区到仓库区

`git commit -m [message]`

###### 提交暂存区的指定文件到仓库区

`git commit [file1] [file2] ... -m [message]`

###### 提交工作区自上次commit之后的变化，直接到仓库区

`git commit -a`

###### 提交时显示所有diff信息

`git commit -v`

###### 使用一次新的commit，替代上一次提交

###### 如果代码没有任何新变化，则用来改写上一次commit的提交信息

`git commit --amend -m [message]`

###### 重做上一次commit，并包括指定文件的新变化

`git commit --amend [file1] [file2] ...`

#### 五、分支

###### 列出所有本地分支

`git branch`

###### 列出所有远程分支

`git branch -r`

###### 列出所有本地分支和远程分支

`git branch -a`

###### 新建一个分支，但依然停留在当前分支

`git branch [branch-name]`

###### 新建一个分支，并切换到该分支

`git checkout -b [branch]`

###### 新建一个分支，指向指定commit

`git branch [branch] [commit]`

###### 新建一个分支，与指定的远程分支建立追踪关系

`git branch --track [branch] [remote-branch]`

###### 切换到指定分支，并更新工作区

`git checkout [branch-name]`

###### 切换到上一个分支

`git checkout -`

###### 建立追踪关系，在现有分支与指定的远程分支之间

`git branch --set-upstream [branch] [remote-branch]`

###### 合并指定分支到当前分支

`git merge [branch]`

###### 选择一个commit，合并进当前分支

`git cherry-pick [commit]`

###### 删除分支

`git branch -d [branch-name]`

###### 删除远程分支

`git push origin --delete [branch-name]`

`git branch -dr [remote/branch]`

#### 六、标签

###### 列出所有tag

`git tag`

###### 新建一个tag在当前commit

`git tag [tag]`

###### 新建一个tag在指定commit

`git tag [tag] [commit]`

###### 删除本地tag

`git tag -d [tag]`

###### 删除远程tag

`git push origin :refs/tags/[tagName]`

###### 查看tag信息

`git show [tag]`

###### 提交指定tag

`git push [remote] [tag]`

###### 提交所有tag

`git push [remote] --tags`

###### 新建一个分支，指向某个tag

`git checkout -b [branch] [tag]`

#### 七、查看信息

###### 显示有变更的文件

`git status`

###### 显示当前分支的版本历史

`git log`

###### 显示commit历史，以及每次commit发生变更的文件

`git log --stat`

###### 搜索提交历史，根据关键词

`git log -S [keyword]`

###### 显示某个commit之后的所有变动，每个commit占据一行

`git log [tag] HEAD --pretty=format:%s`

###### 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件

`git log [tag] HEAD --grep feature`

###### 显示某个文件的版本历史，包括文件改名

`git log --follow [file]`

`git whatchanged [file]`

###### 显示指定文件相关的每一次diff

`git log -p [file]`

###### 显示过去5次提交

`git log -5 --pretty --oneline`

###### 显示所有提交过的用户，按提交次数排序

`git shortlog -sn`

###### 显示指定文件是什么人在什么时间修改过

`git blame [file]`

###### 显示暂存区和工作区的差异

`git diff`

###### 显示暂存区和上一个commit的差异

`git diff --cached [file]`

###### 显示工作区与当前分支最新commit之间的差异

`git diff HEAD`

###### 显示两次提交之间的差异

`git diff [first-branch]...[second-branch]`

###### 显示今天你写了多少行代码

`git diff --shortstat "@{0 day ago}"`

###### 显示某次提交的元数据和内容变化

`git show [commit]`

###### 显示某次提交发生变化的文件

`git show --name-only [commit]`

###### 显示某次提交时，某个文件的内容

`git show [commit]:[filename]`

###### 显示当前分支的最近几次提交

`git reflog`

#### 八、远程同步

###### 下载远程仓库的所有变动

`git fetch [remote]`

###### 显示所有远程仓库

`git remote -v`

###### 显示某个远程仓库的信息

`git remote show [remote]`

###### 增加一个新的远程仓库，并命名

`git remote add [shortname] [url]`

###### 取回远程仓库的变化，并与本地分支合并

`git pull [remote] [branch]`

###### 上传本地指定分支到远程仓库

`git push [remote] [branch]`

###### 强行推送当前分支到远程仓库，即使有冲突

`git push [remote] --force`

###### 推送所有分支到远程仓库

`git push [remote] --all`

#### 九、撤销

###### 恢复暂存区的指定文件到工作区

`git checkout [file]`

###### 恢复某个commit的指定文件到暂存区和工作区

`git checkout [commit] [file]`

###### 恢复暂存区的所有文件到工作区

`git checkout .`

###### 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

`git reset [file]`

###### 重置暂存区与工作区，与上一次commit保持一致

`git reset --hard`

###### 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

`git reset [commit]`

###### 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

`git reset --hard [commit]`

###### 重置当前HEAD为指定commit，但保持暂存区和工作区不变

`git reset --keep [commit]`

###### 新建一个commit，用来撤销指定commit

###### 后者的所有变化都将被前者抵消，并且应用到当前分支

`git revert [commit]`

###### 暂时将未提交的变化移除，稍后再移入

`git stash`

`git stash pop`

#### 十、其他

###### 生成一个可供发布的压缩包

`git arcive`

[原文链接](https://mp.weixin.qq.com/s?__biz=MjM5OTMxMzA4NQ==&mid=2655938669&idx=1&sn=e4e91ffe03cd05f5d6ac1a610d208486&chksm=bc87a3bf8bf02aa94f381cd8f7d08dce2c05e8b83eeb9a7001e1fd7fb4c02df26e524edb6451&scene=0#rd).

