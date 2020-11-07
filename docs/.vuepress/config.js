const headConf = require('./config/headConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const friendLinkConf = require("./config/friendLinkConf");
const pluginsConf = require("./config/pluginsConf");

module.exports = {
  base: "/Blog/",
  title: "Auc的个人博客",
  description: "岁不寒无以知松柏，事不难无以知君子",
  dest: "public",
  head: headConf,
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: pluginsConf,
  themeConfig: {
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    locales: {
      "/": {
        recoLocales: {
          homeBlog: {
            article: "文章", // 默认 文章
            tag: "标签", // 默认 标签
            category: "博客分类", // 默认 分类
            friendLink: "友情链接", // 默认 友情链接
          },
          pagation: {
            prev: "上一页",
            next: "下一页",
            go: "前往",
            jump: "跳转至",
          },
        },
      },
    },
    nav: navConf,
    sidebar: sidebarConf,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: friendLinkConf,
    logo: "/assets/img/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最近更新于",
    author: "Auc",
    authorAvatar: "/assets/img/logo.png",
    record: "备案号暂无",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
};