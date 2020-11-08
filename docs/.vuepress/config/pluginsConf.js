const secret = require("./secret");
const moment = require("moment");
moment.locale("zh-cn");
module.exports = {
  // 插件：文章末尾显示最新commit时间
  "@vuepress/last-updated": {
    transformer: (timestamp) => {
      return moment(timestamp).format("YYYY年MM月DD日HH时");
    },
  },
  // 插件：PWA
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "发现新的文章发布，快去看看吧~",
      buttonText: "刷新",
    },
  },
  // // 插件：评论
  // "@vssue/vuepress-plugin-vssue": {
  //   // 设置 `platform` 而不是 `api`
  //   platform: "github-v4",
  //   // 其他的 Vssue 配置
  //   owner: "Au-c",
  //   repo: "Blog",
  //   clientId: secret.clientId,
  //   clientSecret: secret.clientSecret,
  //   autoCreateIssue: true,
  // },
  // 插件：谷歌数据监控
  "@vuepress/google-analytics": {
    ga: secret.ga,
  },
  //插件：自动生成sidebar
  "vuepress-plugin-auto-sidebar": {},

  // // 插件：点击出现星星
  // "cursor-effects": {
  //   size: 2, // size of the particle, default: 2
  //   shape: ["star"], // shape of the particle, default: 'star' options: 'circle'
  //   zIndex: 999999999, // z-index property of the canvas, default: 999999999
  // },

  //插件：动态标签栏显示
  "dynamic-title": {
    showIcon: "/favicon.ico",
    showText: "知己、可咫尺、可天涯 ",
    hideIcon: "/failure.ico",
    hideText: "你若待、般般称意 ",
    recoverTime: 2000,
  },
};
