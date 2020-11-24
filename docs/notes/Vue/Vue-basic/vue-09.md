---
title: 组件基础
date: 2020-08-23
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 组件基础
## 什么是组件
1. 模块化：拆分JS功能，单个js文件就是一个模块。
2. 组件化：整体拆分结构、样式、行为。

在Vue中，组件为**可复用**的**Vue实例**
- Vue实例，说明是一个实例对象，该对象拥有 new Vue() 的大多数选项，比如：data, methods... 但是没有el，el只有根组件有。
- 可复用：组件一旦定义，可以使用多次。

::: tip 注意
关于组件的可复用：
每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建
:::

## 注册组件
 1. 注册全局组件：使用Vue.component()。详细使用见vueのapi文档。
 2. 注册局部组件：在Vue()实例中添加componets选项。
 ```HTML {.line-numbers}
  <div id="app">
    <!-- 使用组件 -->
    <!-- 这里可以看出组件可以复用 -->
    <auc-div></auc-div>
    <auc-div></auc-div>
    <auc-div2></auc-div2>
    <auc-div2></auc-div2>
    <auc-div2></auc-div2>
  </div>
 ```
 ```JavaScript {.line-numbers}
    // Vue.component()注册全局组件
    Vue.component('auc-div', {
      // template选项
      //注意：该选项中模板需要一个大的容器包裹才可以渲染
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


    const vm = new Vue({
      el: '#app',
      data: {
      },
      // components选项中注册局部组件
      components: {
        'auc-div2': {
          template:
            `
                <div>
                  <h2>这是局部组件</h2>
                  <button>这是局部组件按钮</button>
                </div>
            `
        }
      }
    })
 ```

 ## 组件树
 通常一个应用会以一棵嵌套的组件树的形式来组织

 ### 组成
 通常会包含一个根组件，由于是树形结构，所以两个组件之间的关系是：父子关系或者兄弟关系。
 <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/components.png" width="500" />
 </div>
::: tip 注意
 这些组件，必须注册才可以被Vue系统识别
:::

### 子组件与父组件之间的数据传递规则
 - 组件之间的数据都是独立的，组件之间不可以随意的访问彼此的数据。
 - 父子组件之间的数据传递：遵循单向数据流原则。

::: tip 单向数据流原则
1. 父组件传递给子组件数据，子组件接收数据。
2. 父组件的数据变化了, 自动向下重新流动, 更新与父组件数据有关联的子组件。
3. 反之传递不被允许，通过子组件修改父组件的数据也不被允许，原因是修改父组件数据，会影响其他兄弟组件的数据。
:::

### 父子组件数据传递方法
1. 父 => 子
  - 数据接收：子组件通过添加**自定义标签属性**来接收父组件传递过来的数据。（自定义标签属性名注意全小写）
  - 数据存储：子组件通过内部添加**props数据选项**来存储传递过来的数据。props选项详见api文档。
```HTML {.line-numbers}
  <div id="app">
    <son :attr1="message" :attr2="letter"></son>
  </div>
```
```JavaScript {.line-numbers}
    //子组件
    Vue.component('son', {
      template: `
        <div>
          <h3>子组件</h3>
          <p>自己的数据：{{ msg }}</p>
          <p>父组件传递的数据：{{ attr1 }}    {{ attr2 }}</p>
        </div>
      `,
      data() {
        return {
          msg: 'this is a test message by son'
        }
      },
      //props选项中的数据与data中的类似，可以直接使用
      props: ['attr1', 'attr2']
    });
    //父组件，也是根组件
    const vm = new Vue({
      el: '#app',
      data: {
        message: 'hello son by father',
        letter: 'this is a test letter by father'
      }
    })
```
**上例数据流图：**
 <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201015105519.png" width="800" />
 </div>

::: tip 流程解析
1.  在son组件的HTML标签上自定义了两个属性: attr1 与 attr2.
2. 因为为响应式数据，所以利用v-bind绑定这两个属性的值，预期值对应父组件data数据对象中的message、letter数据项。
3. 在子组件中添加props选项，存储自定义的两个属性的值。
4. 利用template选项，并结合文本插值，数据对应子组件props数据选型中存储的两个元素。动态渲染DOM。
:::

2. 子 => 父：从子组件传递数据到父组件


## 插槽
- **插槽**：Vue的一套内容分发的 API。
- **特点**：`<slot>` 元素作为承载分发内容的出口。插槽内可以**包含任何模板代码，包括 HTML，甚至其他组件**。
- **使用场景**：这里可以与父子组件之间的数据传递比较。
  - 父子组件数据传递：适用于传递简单的数据，但是当需要传递HTML标签结构类数据时，无法实现。
  - 插槽：一般在封装组件时使用，并且可以定指HTML结构。

## 插槽的使用
### 使用默认插槽
- 在组件中：使用`<slot></slot>`标签作为分发内容的出口
- 在组件HTML入口处，可直接使用 HTML 标签等模板代码，当然也可以使用`<template></template>` 包裹，当渲染时，将分发内容替换出口`<slot></slot>`标签。

### 使用具名插槽

**1. 原因**：任何分发内容都会以`<slot></slot>`作为出口，当需要指定不同出口时，使用具名插槽。

**2. 使用**
  - 在组件中给 slot 添加 name 属性 `<slot name="sign"></slot>`
  - 在入口，要使用 `<template></template>`  包裹，并且使用 `v-slot` 指令绑定 name 的属性值

**3. 渲染**：在渲染时，使用 v-slot 指令绑定 name 的那些分发内容找到对应的slot标签作为出口，没有绑定的默认以`<slot></slot>`默认插槽作为出口。

**4. 分发数据示意图**
<div align="left">
 <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201015154824.png" width="800" />
</div>


::: tip 注意
1. 当将分发内容的数据分发到各自出口后，会替换对应的slot标签，以 template 模板整体渲染到该组件对应DOM的位置。
2. 在上面的例子中，如果没有提供默认插槽出口，没有指定出口的内容将会被覆盖。
:::

### 使用作用域插槽
可以在`<slot>`元素上绑定在 attribute，被绑定的 attribute 称为插槽prop。
- 目的：原始插槽入口处数据基本写死，为了数据灵活性，引入作用域插槽。
- 写法：
  - 入口处使用v-slot预期值，用一个对象来准备接收出口处的数据。
  - slot出口处使用自定义标签作为数据源。
- 对比与公共原理：

**不使用作用域插槽**
<div align="left">
 <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201016205612.png" width="600" />
</div>

入口处数据写死，被slot默认插槽接收后，由于数据写死，直接渲染死数据。

**使用作用域插槽**
<div align="left">
 <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201016205850.png" width="600" />
</div>
::: tip 分析
1. 首先看入口处，使用 `<template></template>` 包裹，并且 v-slot 使用了预期值，这个预期值 numObj 是个对象。
2. `<template></template>` 整体以 slot 为出口，在出口处，num1 与 num2 两个自定义属性被 numObj 对象接收，在渲染时，使用了文本插值，内部使用 JS 表达式取 numObj 中存储的值。
:::

:100: 其实，你也可以让数据更为灵活。
```JavaScript {.line-numbers}
    Vue.component('test', {
      template: `
        <div>
          <div>这是作用域插槽</div>

          //看：这里将两个自定义属性的值与该组件的data选项中的数据绑定了。
          <slot :num1="data1" :num2="data2"></slot>
        </div>
      `,
      data() {
        return {
          data1: '01',
          data2: '02'
        }
      }
    });
```
:100: 当然，你可能想到了，结合前面的父子组件之间的数据传递，将数据源转到父组件上：这样如果数据从后台拿的话会更方便。
```HTML {.line-numbers}
  <div id="app">
    <test :data1="rootdata1" :data2="rootdata2">
      <template v-slot="numObj">
        <h2>{{ numObj.num1}}</h2>
        <h2>{{ numObj.num2}}</h2>
      </template>
    </test>
  </div>
```
```JavaScript {.line-numbers}
    Vue.component('test', {
      template: `
        <div>
          <div>这是作用域插槽</div>
          <slot :num1="data1" :num2="data2"></slot>
        </div>
      `,
      props: ['data1', 'data2']
    });
    const vm = new Vue({
      el: '#app',
      data: {
        rootdata1: '01',
        rootdata2: '02'
      }
    })
```