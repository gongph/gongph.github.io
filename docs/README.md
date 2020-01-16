---
sidebar: false
---

# Profile

## 联系方式

- 手机：13121605879
- Email : gongph@foxmail.com
- QQ : 1769617251(个人)/562522675(技术群)

## 个人信息

- 龚朋辉/男/处女座/1991-08-06
- 本科/北京经济技术研修学院
- 工作年限：5+年
- 技术博客：[https://juejin.im](https://0x9.me/Jyxqe)
- Github: [https://github.com/gongph](https://github.com/gongph)
- 期望职位： Web前端高级工程师
- 期望薪资： 18k ~ 20K（税前）
- 期望城市： 深圳

## 技能标签

- Web开发:

`HTML5`、`CSS3`、`JavaScript`、`ES6`、`jQuery`

- 前端框架:

`Vue.js`、`uniapp(跨端开发)`、`Element-UI`、`Framework7-Vue(移动开发框架)`

- 前端构建/预编译工具:

`webpack`、`gulp`、`fis3`、`scss`、`less`

- 版本管理:

`git`、`svn`

- 前端代码测试工具:

`Mocha`、`Jest`

- 代码检查工具:

`eslint`

- 开放平台:

`微信小程序`

## 自我评价

- 工作认真负责，严以律己，不早退、不迟到、不拖沓、不延期、不埋坑。
- 具有良好的代码编写和封装能力。
- 能熟练运用 HTML5 + CSS3 + JavaScript 开发具有兼容性、性能、seo优化、用户体验好的企业网站的能力。
- 能熟练运用 Vue.js 全家桶快速搭建开发企业级后台管理系统的能力
- 能熟练运用 Webpack 或 Gulp 前端打包工具优化现有项目的能力
- 热爱生活、热爱前端技术、热爱工作
- 喜欢逛 Github、掘金、MDN等社区和技术网站

## 工作经历

### 文思海辉技术有限公司（2018年1月26日 ~ 现在）

:::tip
工作所在公司： 搜狐畅游
:::

#### 1. 云客服后台系统
该项目是[搜狐畅游](https://www.one.cn/) 的一款线上产品项目，提供 PC、WAP、APP、微信端的 SDK 对接，给目标客户提供在线客服咨询以及后台统计管理等功能。你可以访问官网 [one.cn](one.cn) 。 这个项目我来之前就已经基本上做完了，我主要负责的任务模块有：

- 旧模块日常 Bug 的修复以及新功能模块的开发
- 旧模块的优化，重构等

遇到的问题主要有：

- 团队开发当中的代码不规范导致维护、拓展性较差，代码重复率过高
- 项目构建，访问速度过慢
- 项目资源过大过多导致 http 请求负担过重

针对以上问题，我采取的技术方案是：

- 使用 [Eslint](https://eslint.org/docs/rules/) 做代码层面的规范化约束，这样做的好处是：更少的 Bug；更高的开发效率，Lint 很容易发现低级的、显而易见的错误；以及更高的可读性

- Webpack 构建过程中提取多个 chunk 之间的通用模块，减少总体的代码体积
- 把部分依赖转移到 CDN 上，避免每次编译都有 webpack 处理
- 对于支持局部引入的类库，在开发过程中使用局部引入的方式，避免引入无用的代码
- 使用 [Vue Router](https://router.vuejs.org/zh/) 做路由懒加载处理
- 把所有的图标文件换成字体文件来处理

#### 2. 云客服访客系统
该项目是通过 CDN 引入的方式接入到客户项目中的。 考虑到用户群体还有在用 IE9- 。所以这个项目又分成了两个版本： Vue 版本和 IE7-8 版本。 对应的技术选型有：

Vue 版本：

- Vue 全家桶 + Webpack 构建工具

IE7-8 版本：

- Jquery库 + 传统的 div/css + 百度的 [Fis3](http://fis.baidu.com/fis3/index.html) 构建工具

其中遇到的问题基本上都是 IE 的，例如：

- CSS兼容性问题。 利用各种 hack 进行解决
- 浏览器缓存导致的 Cookie 无法携带的奇葩问题。 最后在每个 api 后加个时间戳可以解决
- Socket 通信选用的是 [socket.io](https://www.npmjs.com/package/socket.io)。无须考虑浏览器兼容问题，其内部实现有个降级策略。

#### 3. 官网
负责官网页面的开发与更新。 可以移步这里查看：

- [云客服官网 + H5](https://www.one.cn/)： [https://www.one.cn/](https://www.one.cn/)
- [智U机器人官网](http://www.zyou.cn/)： [http://www.zyou.cn/](http://www.zyou.cn/)

#### 4. 运营管理平台
该平台是提供给内部运维人员使用的，对日常数据的一些管理等。 技术选型： Vue 全家桶。 功能比较单一，即所有的模块都是增删改查。

#### 5. 小程序
微信小程序，可以搜**2019春晚节目单**。纯数据的展示，功能较简单，略过。

### 软通动力（2015年8月 ~ 2017年1月）

:::tip
甲方公司： 证监会
:::

1. 中国证监会信息监管平台法律法规系统

为这个项目提供公共组件的技术支持，即负责前端组件的开发工作。 使用的是 Vue 组件开发方案，仓库地址：[https://github.com/gongph/sflds-vue](https://github.com/gongph/sflds-vue)

2. 中国证监会公共插件开发

使用 jQuery 或 原生 JavaScript 开发一系列前端插件（例如：弹出框、树形、表格、分页），提供给业务系统使用。用来满足业务系统复杂的需求，提高代码的重用性和可维护性。因为代码是私有的，所以这里不便公开。


### 中国东方邦信资产管理有限公司（2013年6月 ~ 2015年8月）
该公司主要经营的产品有： P2P、 微贷。 主要的负责的工作有：

- 前端新功能的增删改查模块开发
- 后台 Java 代码的模块开发等


## 技术文章

- [Vue.js 父子组件通信的十种方式](https://juejin.im/post/5bd18c72e51d455e3f6e4334): https://0x9.me/qIiA4
- [为什么我的代码让别人看起来头皮发麻？](https://juejin.im/post/5bd83871f265da0afa3e3204): https://0x9.me/4QzYg
- [Vue.js奇技淫巧](https://juejin.im/post/5be01d0ce51d450700084925): https://0x9.me/A85ze
- [正在写的Element工程化构建源码学习](https://gongph.github.io/element-code-learning/): gongph.me/element-code-learning/

## 致谢
感谢您花时间阅读我的简历，如果您对我的简历感兴趣可以右键打印哦，期待能有机会和您共事。 
