---
title: 规模化
date: 2020-08-26
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 规模化
## 路由
其实就是一套映射的规则, 标记了地址栏hash值和所展示的组件的对应关系。当 URL 中的哈希值( `#` hash) 发生改变后,路由会根据制定好的**规则**, 展示对应的组件。
### 单页应用程序
单页Web应用（single page web application，SPA）只有一张Web页面的应用,  所有的功能在一个页面上实现。

**1. 对比**
- 传统多页面应用程序，每次服务器返回一个完整页面。
- 单页面应用程序，第一次请求加载完整页面，之后请求仅获取必要数据。

**2. 优点**

减少请求体积，加快页面响应速度，降低了对服务器的压力,  SPA更好的用户体验，运行更加流畅**。

**3. 缺点**
- 首屏加载会相对较慢
- 不利于SEO搜索引擎优化

### 模拟路由
```HTML {.line-numbers}
  <a href="#/home">首页</a>
  <a href="#/login">登录页</a>
  <a href="#/game">游戏界面</a>
  <div class="content" id="testContent"></div>
```
```JavaScript {.line-numbers}
    window.addEventListener('hashchange', function () {
      console.log('hash changed');
      switch (location.hash) {
        case '#/home':
          document.getElementById('testContent').innerHTML = "这是首页";
          break;
        case '#/login':
          document.getElementById('testContent').innerHTML = "这是登录页";
          break;
        case '#/game':
          document.getElementById('testContent').innerHTML = "这是游戏界面"
      }
    });
```