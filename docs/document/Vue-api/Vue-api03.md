---
title: 选项(资源)
date: 2020-09-03
tags:
 - Vue
 - Vueのapi
categories: 
 - 文档
---
# 选项(资源)
## directives
## filters
## componet
`Vue.component(id, [definition] )`

### 功能
注册一个全局组件。
### 参数
1. id: String型，为该组件的名称

规范：全小写，几个单词之间用 `-` 隔开
::: tip 注意
组件的名称不能是内置、保留的HTML标签，会发生冲突，比如Id为di统div标签冲突
:::

2. definition：{ Function || Object }
- Object 配置对象

template选项：该属性为组件的渲染模板，指定组件的HTML结构  
::: tip 注意
该模板只可以有一个根节点
:::
- 其他配置项

拥有new Vue()的大多数选项，除了el选项

**data选项**：在组件中，很特殊，**data必须为一个函数**，return一个对象，返回的对象中写数据。

::: tip 优势
保证数据的独立性，因此每个实例可以维护一份被返回对象的独立的拷贝。
:::
### 注册一个全局组件
```JavaScript {.line-numbers}
// Vue.component()注册全局组件
Vue.component('auc-div', {
  // template选项
  template:
    `
    <div>
      <p>{{ count }}</p>
      <button @click="fn">这是全局组件button</button>
  </div>
  `,
  //其他选项：
  // 组件中data选项，必须为一个函数，每次使用组件，执行该函数，将函数返回的对象作为该组件的数据对象
  data() {
    return {
      count: 0
    }
  },
  methods: {
    fn() {
      this.count++;
    }
  }
});
```

使用它：

```HTML {.line-numbers}
<div id="app">
  <!-- 使用组件 -->
  <auc-div></auc-div>
  <auc-div></auc-div>
</div>
```