module.exports = [
  ["meta", { name: "author", content: "Auc" }],
  [
    "meta",
    {
      name: "keywords",
      content: "Auc的个人博客",
    },
  ],
  ["link", { rel: "icon", href: "/icons/favion.ico" }],
  ["link", { rel: "manifest", href: "/manifest.json" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: "/icons/icon-192x192.png" }],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/icons/safari-pinned-tab.svg",
      color: "#3eaf7c",
    },
  ],
  [
    "meta",
    { name: "msapplication-TileImage", content: "/icons/icon-192x192.png" },
  ],
  ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  // 引入jquery
  [
    "script",
    {
      language: "javascript",
      type: "text/javascript",
      src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
    },
  ],
  // 引入鼠标点击动画脚本
  [
    "script",
    {
      language: "javascript",
      type: "text/javascript",
      src: "/js/MouseClickEffect.js",
    },
  ],
  [
    "link",
    {
      rel: "styleSheet",
      href: "/mouseCSS/mouse.css"
    }
  ]
];
