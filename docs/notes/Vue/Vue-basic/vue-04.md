---
title: Class与Style的绑定
date: 2020-08-05
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# Class与Style的绑定
## 绑定HTML Class
利用v-bind指令可以绑定标签属性，当然可以绑定class属性

### 对象语法
**1. 内联定义在模板中**
- 将绑定的class对象直接定义在标签中，对象中的键值对，键为类，值为布尔值 
```HTML
<div class="border" :class="{small: true}"></div>
```
渲染结果：`<div class="border small"></div>`

- 将vm中data选项中的数据绑定上述对象中键值对中的值
```HTML
<div class="border" :class="{small: isSmallInObj}"></div>
```
在vm中：`data: { isSmallInObj: true }`

渲染结果：`<div class="border small"></div>`


**2. 直接将类绑定data中的数据对象** `<div :class="obj"></div>`

vm中：
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    obj: {
      border: false,
      middle: true
    }
  }
```
渲染结果：`<div class="border small"></div>`

### 数组语法
1. 绑定的类，属性预期写数组，将data中的数据绑定数组中的每一项

HTML：`<div :class="[arrBig, arrBorder]"></div>`

vm：绑定的数据值写需要的类
```JavaScript {.line-numbers}
//arrBig键，其值为 big类
//arrBorder键，其值为border类
data: { 
    arrBig: 'big', 
    arrBorder: 'border' 
}
```
2. 直接将类绑定data中的数据数组

HTML: `<div :class="arr"></div>`

vm:
```JavaScript {.line-numbers}
data: { 
    //数组第一项为border类，第二项为middle类
    arr: ['border', 'middle'],
}
```
3. 实现类的切换(提供一种方式)

`<div :class="[switchClass ? arrBorder : '', arrSmall]"></div>`
```JavaScript {.line-numbers}
//注意，第一项三元运算符最后为一个空字符串
//这样，数组中第二项始终绑定small类
//只有当switchClass 值为true时，才多绑定border类
const vm = new Vue({
  el: '#app',
  data: {
    arrBorder: 'border',
    arrSmall: 'small',
    switchClass: true
  }
})
```


### 双向绑定？
*利用class绑定，解析 Vue 的双向数据绑定*

看一段代码：
```JavaScript {.line-numbers}
  <div id="app">
    <div class="border" :class="{small: isSmallInObj}"></div>
  </div>

  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        isSmallInObj: true,
      }
    })
  </script>
```
对于该标签来说，与Vue响应式系统的交互开关为v-bind指令，真实的数据交互为isSmallInObj，不难发现，isSmallInObj就是vm中的数据项，在渲染DOM时使用到isSmallInObj时会去vue响应式系统查找该变量的值。

此时为 small: true，该标签最终被渲染为了`<div class="border small"></div>`

<div align="left">
    <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201008213625.png" width="450"></img>
</div>

::: tip 提示
所以在指令的预期值中，欲动态渲染的数据都要使用vue组件中数据
:::

## 绑定HTML 行内样式
原生HTML给标签设置sytle属性，成为行内样式

1. 对象语法
- 内联定义在模板中，对象中的键值绑定vm数据

HTML: `<div :style="{fontSize: vmFontSize, color: vmColor}">绑定行内样式1</div>`

vm: ` data: { isSmallInObj: true} `

渲染结果: `<div style="font-size: 20px; color: red;">绑定行内样式1</div>`

- 预期值直接绑定vm数据
HTML: `<div :style="vmStyle">绑定行内样式2</div>`

vm.data: `vmStyle: {fontSize: '30px', color: 'blue'}`  

渲染结果: `<div style="font-size: 30px; color: blue;">绑定行内样式2</div>`

2. 数组语法：
可以将多个样式对象应用到同一个元素上

HTML: `<div :style="[obj1, obj2]">绑定行内样式3</div>`

vm.data: `arrBig: 'big', arrBorder: 'border'`

渲染结果: `<div style="font-size: 40px; color: yellow; border: 5px solid pink;">绑定行内样式3</div>`