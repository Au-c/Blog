---
title: 可复用性 & 组合
date: 2020-08-19
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 可复用性 & 组合
## 自定义指令
除了Vue内置指令外，允许用户自定义指令

1. 使用：directive()函数，详细使用见vueのapi文档.
2. 分类：
- 局部指令：使用directives资源选项
- 全局指令：使用Vue.directive() API
```HTML {.line-numbers}
  <div id="app">
    <input type="text">
    <!-- 使用自定义指令 -->
    <input type="text" v-focus placeholder="自定义的全局指令">

    <p v-red>自定义的局部指令</p>
  </div>
```
```JavaScript {.line-numbers}
    // 1. 注册一个全局自定义指令 `v-focus`，使输入框进入网页自动聚焦
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      //inserted()钩子函数
      inserted(el) {
        // 聚焦元素
        el.focus();
      }
    });
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'hello vue'
      },
      // 自定义局部指令
      directives: {
        red: {
          inserted(el) {
            el.style.color = 'red'
          }
        }
      }
    })
```
## 过滤器
1. 功能：用于将数据进行文本格式化。
2. 本质：过滤器本质上是一个函数，filter()，详见 API文档。
3. 用处：
用在文本插值以及v-bind的预期值表达式中。
形式上是将过滤器添加到表达式的尾部数据，并使用管道符号
 ```HTML
{{ msg  | msgFilter }}
 ```
4. 分类：

全局过滤器：定义后任何Vue的组件都可以使用。

局部过滤器：定义后，只在当前组件使用。需要写在**filters资源选项**中。
```HTML {.line-numbers}
  <div id="app">
    <!-- 管道符号 -->
    {{ msg  | msgFilter }}
    <br />
    {{ text | textFilter }}
  </div>
```
```JavaScript {.line-numbers}
    // 定义一个全局过滤器
    Vue.filter('textFilter', function (value) {
      return value.toLowerCase();
    });
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'this is a demo of filter',
        text: 'TEXT'
      },
      // 定义一个局部过滤器
      filters: {
        msgFilter(value) {
          return value.toUpperCase()
        }
      }
    })
```
5. 注意：
- **过滤器是个函数**

所以在使用时可以传参
 ```HTML
{ text | textFilter(param1, param2...)}
 ```
:100: 内部机制

总把管道符号左边的作为第一个参数传入过滤器，param1为第二个参数...
 ```HTML {.line-numbers}
   <div id="app">
   <!-- 往过滤器中传参 -->
   {{ text | textFilter('this is a ') }}
   </div>
 ```
 ```JavaScript {.line-numbers}
   // 首先管道右边的始终是第一个参数，对应形参value，接着，第二个参数''this is a '对应形参str
   //将这两个参数传入filter()函数中，并由内部处理函数接收，并处理
   Vue.filter('textFilter', function (value, str) {
     return str + value;
   });
   const vm = new Vue({
     el: '#app',
     data: {
       text: 'test of filter'
     }
   })
 ```

 - **过滤器可以串联**
 ```HTML
{{ message | filterA | filterB }}
 ```

 filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中