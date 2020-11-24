---
title: 条件渲染
date: 2020-08-09
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 条件渲染
1. 顾名思义，符合指定条件的才进行渲染。
2. 相关的指令：v-show, v-if, v-else, v-else-if ==> 详细使用见vueのapi文档。
## v-if
1. 用于条件性的渲染一块内容，只有在指令预期值表达式返回真值时才被渲染。
2. 使用 v-if 条件渲染分组。
    - 原理：给外层包裹的父节点添加v-if指令，内部子节点自然也与父节点共存亡。
```HTML {.line-numbers}
  <div id="app">
    <div v-if="isthere">
      <h2>Date:</h2>
      <p>2020-03-16</p>
      <p>Today I will learn Vue as usual</p>
    </div>
  </div>
```
```JavaScript {.line-numbers}
  const vm = new Vue({
    el: '#app',
    data: {
    isthere: true
    }
  })
```

## 用key管理可复用的元素
Vue会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。当遇到不复用元素的情况时，可以给元素增加**特殊attribute key**，来增添**唯一标识**。
::: tip 提示
原理见 **列表渲染**中的**就地更新**小结
:::

```HTML
  <div id="app">
    <!-- 点击button可以切换渲染这两个分组 -->
    <button @click="switchItem()">{{isUsername ? '切换到email' : '切换到username'}}</button>
    <br />
    <!-- 1. username分组 -->
    <div v-if="isUsername">
      <p>Username</p>
      <br />
      <input type="text" placeholder="Please enter your username">
    </div>
    <!-- 2. email分组 -->
    <div v-else>
      <p>Email</p>
      <br />
      <input type="text" placeholder="Please enter your email">
    </div>
  </div>
```

::: tip 注意
发现问题：
首先在username分组输入内容，然后切换到另一个分组，发现之前在Input框中输入的内容还存在。
:::
**原因**
1. Vue会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染,，由于这两个分组模板使用了相同元素，所以当切换时，*不会删除原来输入的内容，而是将email输入框中的placeholde替换掉了*。
2. 其实不止复用了Input，*p标签也被复用*，只是内容替换了一下。

**解决问题**

使用特殊的attribute key 来为不需要Vue系统复用的元素增添唯一标识。
:::tip 注意
如下，给两个Input添加了key属性，有了唯一标识，不被复用。但是没有key的两个p标签依然会复用。
:::
```HTML
  <input type="text" placeholder="Please enter your username" key="keyOfUsername">
  <input type="text" placeholder="Please enter your email" key="keyOfEmail">
```
## 其他
1. v-if 与 v-show 区别：见文档。
2. 不推荐同时使用 v-if 与 v-for，涉及优先级的问题。