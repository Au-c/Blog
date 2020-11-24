---
title: 计算属性和侦听器
date: 2020-08-07
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 计算属性和侦听器
## 计算属性
当使用插值时，明确的阐明内部无法使用JS语句，只是一个轻逻辑的表达式，当渲染的数据需要经过重逻辑运算才可以得出最终结果时，这时，计算属性就有了用武之地。

**计算属性**:  将原始数据进行重逻辑处理，返回处理后的数据。

### 使用计算属性
**1. 定义**

计算属性写在 computed 数据选项中

**computed 数据选项**：与大多数数据选项一样，内部this指向vm实例，注意，使用箭头函数this指向会更改。

**2. 功能**: 与data类似，都是提供数据源

  内部属性与data不同，是一个个函数，数据源是函数处理后的返回值

**3. 特点**
  - 计算属性有响应式依赖
  - 计算属性有缓存

### 使用一个简单的计算属性
```HTML {.line-numbers}
    <div id="app">
      <p>原始数据: {{ msg }}</p>
      <p>计算属性处理后的数据: {{ handleMsg }}</p>
    </div>
```
```JavaScript {.line-numbers}
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'this is a test message'
      },
      computed: {
        handleMsg() {
          // 数据源是处理函数返回的值
          // this 指向vm实例
          //这个例子中，this.msg可见该计算属性依赖于vm.msg
          return this.msg.split(' ').reverse().join('-');
        }
      }
    })
```
### 计算属性VS方法
:100: 主要探究计算属性的两个特点

看到这里，发现可以通过在插值中调用方法来达到同样的效果

::: tip 重点
查看计算属性特征
计算属性是基于它们的响应式依赖进行缓存的
这句话有两点
- 计算属性有响应式依赖，下面例子就是处理前的vm.data中的数据
- 计算属性有缓存
:::

```HTML {.line-numbers}
  <div id="app">
    <p>原始数据: {{ msg }}</p>

    <!-- 计算属性 -->
    <p>计算属性处理后的数据: {{ handleMsg }}</p>
    <p>计算属性处理后的数据: {{ handleMsg }}</p>
    <p>计算属性处理后的数据: {{ handleMsg }}</p>

    <!-- 方法 -->
    <p>方法处理后的数据: {{ handleMsgFn() }}</p>
    <p>方法处理后的数据: {{ handleMsgFn() }}</p>
    <p>方法处理后的数据: {{ handleMsgFn() }}</p>

  </div>
```
```JavaScript {.line-numbers}
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'this is a test message'
      },
      // 方法
      methods: {
        handleMsgFn() {
          // 调用三次，打印三次 ==> 说明执行了三次该函数
          console.log('使用方法处理');
          return this.msg.split(' ').reverse().join('~');
        }
      },
      //计算属性
      computed: {
        handleMsg() {
          //调用三次，打印一次 ==> 说明执行了一次该函数
          console.log('使用计算属性处理');
          return this.msg.split(' ').reverse().join('-');
        }
      }
    })
```

对比二者的调用，查阅文档得知：

对于计算属性computed来说，**只要它的响应式依赖不变化**，当执行一次后，就会将数据缓存到响应式系统中，下次再次使用直接使用缓存，而不是再次执行一遍处理函数，**这减少了性能的开销**。

*当其依赖的值发生变化时，计算属性会自动重新计算，并再次缓存。*

### 计算属性VS侦听器
首先，见下侦听器。

使用侦听器，可以很容易的观察和响应 Vue 实例上的数据变动。

但当侦听的数据中，有一些数据是随着其他数据变动而变动时，这时最好使用计算属性。

如下：

使用监听器，监听变量lastName与firstName的数据，当二者有数据变动时，执行watch数据选项中的回调函数，响应式的修改变量fullName的数据。
```HTML {.line-numbers}
  <div id="app">
    {{ fullName }}
  </div>
```
```JavaScript {.line-numbers}
  const vm = new Vue({
    el: '#app',
    data: {
      firstName: 'Arya',
      lastName: 'Stark',
      fullName: 'Ayra Stark'
    },
    watch: {
      firstName(newValue) {
        this.fullName = newValue + ' ' + lastName;
      },
      lastName(newValue) {
        this.fullName = firstName + " " + newValue;
      }
    }
  })
```

这时候，有数据关联，那使用计算属性就更为便捷了：
```JavaScript {.line-numbers}
  const vm = new Vue({
    el: '#app',
    data: {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    computed: {
      fullName() {
        return this.firstName + " " + this.lastName;
      }
    }
  });
```

### 归纳：监听器与计算属性

1. 相同点：
    - 都是vm的数据选项，用来处理数据。
    - 数据变化，做出响应：计算属性的响应式依赖数据发生变化时，会重新执行该计算属性函数；监听器所监视的数据发生变化时，会触发监听回调函数。

2. 不同点：
    - 执行过程上：计算属性通常拿到响应式依赖数据，进行数据的*再次加工*，再将加工后的数据响应式的渲染；监听器监听数据，等数据变动做出响应。
    - 使用情况上：计算属性通常处理插值逻辑过重的问题，一些数据是随着其他数据变动而变动；监听器通常监听vm实例的数据变化情况，并在数据变动后，做出响应机制。

## 侦听器
定义在watch数据选项中，使用watch监听器来响应数据的变化，主要用于监视vm实例上的数据变化

1. 执行机制：
    - Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个 property
    - 观察和响应 Vue 实例上的数据变动，也就是当所监听的数据发生变动时，自动触发给该数据设置的监听回调函数，在函数中做出一些逻辑处理。
2. 使用情况：当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的
3. 写法：见api文档