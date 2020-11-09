---
title: 指令
date: 2020-09-05
tags:
 - Vue
 - Vueのapi
categories: 
 - 文档
---
# 指令
## v-text 与 v-html
### v-text
1. 功能：更新元素的innerText，所以不可以识别HTML标签
2. 参数：无
3. 预期：String(值对应实例组件中data中的数据)
::: tip 注意
加上v-text相当于该节点内容只能是v-text所绑定数据的内容，更新一次数据会全部覆盖一次。
如果要更新部分的textContent，使用文本插值{{}}
:::
```HTML {.line-numbers}
<div v-text="msg1">sdfsdf</div>
<div>this is {{ msg1 + 'sdfsdf' }}</div>
```
### v-html

1. 功能：更新元素的innerHTML
2. 参数：无
3. 预期：String(值对应实例组件中data中的数据)
::: tip 注意
更新一次覆盖一次，innerHTML时的不安全性这里也存在，不要用于用户提交的内容上
:::

```HTML {.line-numbers}
<!-- 原来的内部a标签被覆盖 -->
<div v-html="htmlContent"><a href="#">sdfsdf</a>div>
```
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    msg1: 'v-text',
    htmlContent: '<h2>v-html指令</h2>'
  }
})
```

## v-show v-if v-else v-else-if
首先 v-show 与 v-if 都是控制元素的显示与隐藏
### v-show
1. 参数：无
2. 预期：any(可为单一JS表达式，值为布尔值；或绑定vm实例组件数据选项中的数据，最后结果依然为一个布尔值)
::: tip 注意
实现原理：动态的控制该节点样式的display属性值。
:::
```HTML {.line-numbers}
<div v-show="flag">controlled by v-show</div>
```
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    flag: true
  }
})
```
### v-if
1. 参数：无
2. 预期：any(可为单一JS表达式，值为布尔值；或定vm实例组件数据选项中的数据，最后结果依然为一个布尔值）
::: tip 注意
实现原理：动态的添加与删除该DOM节点
:::
```HTML {.line-numbers}
<div v-if="flag">controlled by v-if</div>
```
```JavaScript {.line-numbers}
const vm = new Vue({
   el: '#app',
   data: {
     flag: true
   }
 })
```
::: tip 注意区分
- 频繁的切换显示与隐藏，使用v-show，原因是v-if频繁的添加删除节点，消耗性能。
- 单纯的使用单一一种状态，要么隐藏，要么显示，用v-if，原因是使用v-show就算隐藏也将该节点添加了进去。
:::

### v-else
1. 功能：与 v-if 或 v-else-if 连用，条件渲染
2. 不需要表达式
3. 限制：前一个兄弟元素必须绑定有 v-if 或 v-else-if 指令
```HTML {.line-numbers}
<h2 v-if="pass">欢迎您</h2>
<h2 v-else>请登录</h2>
```
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    pass: true
  }
})
```

### v-else-if
1. 功能：条件渲染
2. 参数：无
3. 预期：any(可为单一JS表达式，值为布尔值；或使用实例组件data选项中的数据，最后结果依然为一个布尔值）
4. 限制：前一个兄弟元素必须绑定有 v-if 或 v-else-if 指令
```HTML {.line-numbers}
<h2 v-if="price >= 1000">too high</h2>
<h2 v-else-if="price >= 500">normal</h2>
<h2 v-else-if="price >= 200">nice</h2>
<h2 v-else>buy it</h2>
```
```JavaScript {.line-numbers}
const vm = new Vue({
   el: '#app',
   data: {
     pass: true,
     price: 30
   }
 })
```

## v-bind
1. 功能：动态地绑定一个或多个 attribute，或一个组件 prop 到表达式
2. 缩写：以一个冒号开头 `:`
3. 参数：**【TODO】**    HTML标签的属性名
4. 预期：any
```HTML {.line-numbers}
<!-- 1. 绑定一个HTML标签的 attribute，预期为data中的数据 -->
<img v-bind:src="imgSrc" />
<!-- 2. 缩写 -->
<img :src="imgSrc" />
<!-- 3. 预期值为参数字符串拼接，fileName为data中的数据 -->
<img :src="'/path/to/images/' + fileName" />
<!-- 4. 绑定class: 详见Vue Class与Style绑定小节 -->
<div class="border" :class="{small: isSmallInObj}"></div>
<!-- 5. 绑定行内样式style: 详见Vue Class与Style绑定小节-->
<div :style="vmStyle">绑定行内样式2</div>

<!-- TODO -->
```

## v-for
1. 功能：遍历原数据的数组或对象，基于源数据多次渲染元素或模板块。
2. 参数：无
3. 预期
    - 遍历类型：Array | Object | number | string | Iterable (2.6 新增)
    - 预期的特殊格式：*下面的指令预期中，可以用 of 替换 in*
::: tip 预期值要注意区分
**遍历数组**

- v-for = "item in items"    items为原数据数组，item为迭代的当前数组元素别名
- v-for = "(item, index) in items"   index为迭代的当前数组元素索引

**遍历对象**
- v-for = "value in obj"     value为迭代的当前键值， obj为原数据对象
- v-for = "(value, prop) in obj"   prop为迭代的当前键名
- v-for = "(value, prop, index) in obj"     index为迭代的当前对象键的索引

*遍历对象时，一般绑定一个特殊**attribute key**来为当前遍历的元素提供别名*
:::

```HTML {.line-numbers}
<div id="app">
 <!-- 1. 遍历数组：item in items -->
  <div v-for="item in arr1">
    {{item}}
  </div>
  <br />
 <!-- 2. 遍历数组：(item, index) in items -->
  <div v-for="(item, index) in arr2">
    {{`index: ${index} item: ${item}`}}
  </div>
  <br />
 <!-- 3. 遍历对象：(value, prop) in obj -->
  <div v-for="(value, prop) in obj">
    {{`${prop} : ${value}`}}
  </div>
</div>
```
```JavaScript {.line-numbers}
const vm = new Vue({
   el: '#app',
   data: {
     arr1: [1, 2, 3, 4, 5],
     arr2: [6, 7, 8, 9],
     obj: {
       name: 'Jack',
       age: 20
     }
   }
 })
```
**运行结果**
<div align="left">
    <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201008175614.png" width="400"></img>
</div>

4. 特殊的attribute key
- 利用v-for指令遍历对象时，一般绑定一个特殊attribute key来为当前遍历的元素提供别名，可以优化列表渲染的性能 
- 写法：v-bind: key = "每一项唯一的标识"

详见笔记 Vue **列表渲染**中的**维护状态**小节

## v-on
1. 功能：用于注册事件
2. 简写：使用@
3. 参数：事件event
4. 预期：Function | Inline Statement(内联语句) | Object
    - 预期为内联语句
    - 预期为Function：分为传参与不传参两种
    - 预期函数一般在 new Vue() 实例的methods选项中查找

5. 修饰符

常用的有
- :stop`           阻止事件冒泡
- :prevent`      阻止默认行为
- :native`        监听组件根元素的原生事件
   
```HTML {.line-numbers}
<!-- 1. 预期值为Function并传参 -->
<div id="app" v-on:click="clickOuter(12)">
  <!-- 2. 缩写 + 修饰符 + 预期值为内联语句 -->
  <div @click.stop="judgment = !judgment">点击控制inner部分显示隐藏</div>
  <!-- 3. 缩写 + 修饰符 + 预期值为Function不传参 -->
  <div class="inner" v-show="judgment" @mouseenter.stop="clickInner"></div>
</div>
```
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    judgment: true
  }  //methods选项，内部写方法，方法中的 this 自动绑定为 Vue 实例，注意这里的方法一般不用箭理由是箭头函数将不指向Vue实例，而是undefined
  methods: {
    clickInner() {
      console.log('inner box is here');
    },
    clickOuter(num = 0) {
      console.log(`outer box: Number is ${num}`);
    }
  }
})
```
## v-model
1. 普通的使用
2. 【TODO】组件中的使用
[见文档](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)


## v-once
1. 不需要表达式
2. 功能：只渲染元素或组件一次，若之后数据变动，元素或组件及其  所有子节点  被视为静态内容跳过渲染
3. 优点：优化性能
```HTML
<!-- 1. 可用于单个节点 -->
<!-- 第一次渲染后，跳过之后数据改动后的渲染 -->
<h2 v-once>v-once用于单个节点{{ msg }}</h2
<!-- 2. 可用于有子节点的父节点 -->
<!-- 第一次渲染后，若之后数据改动，跳过父节点以及下属所有子节点的渲染 -->
<!-- TODO        3. 作用于组件，当学习完组件后，再来补充 -->
<div v-once>
  <h2>v-once用于有子节点的父节点{{ msg }}</h2>
  <p>{{ msg }}</p>
</div>
```

## v-slot
1. 功能：提供具名插槽或需要接收 prop 的插槽
2. 缩写：`#`
3. 参数：插槽名
4. 预期：[可选]需要为插槽传入 prop 的时候使用
5. 先用于
- `<template>`标签
- 组件(插槽可以包含组件)
6. 示例
```HTML
    <test>
      <template v-slot:second>此文字被第二个插槽接收</template>
      //添加预期值，往组件props选项中传入数据
      <template v-slot:third="this is a message">此文字被第三个插槽接收</template>
      <h2>此文字被第一个默认插槽接收</h2>
    </test>
```