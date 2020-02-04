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

~~~
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

