---
title: 选项(数据)
date: 2020-09-02
tags:
 - Vue
 - Vueのapi
categories: 
 - 文档
---
# 选项(数据)
## data
## methods
## computed
## watch
1. watch选项是一个对像，内部为被监视数据的回调函数或者被监视的其他引用类型数据

2. 内部键值对类型：`{ Function | String | Array | Object }`

3. 使用
```JavaScript {.line-numbers}
const vm = new Vue({
  el: '#app',
  data: {
    value1: 1,
    obj: {
      value2: 2
    },
  },
  watch: {
    // 1. 该回调函数监视value1值的变化
    // 函数名为需要监视的数据项
    value1(newValue, oldValue) {
      console.log(`value1旧值：${oldValue}  value1新值：${newValue}`);
    },
    // 2. 该回调深度监视obj对象的变化
    //使用deep选项，其值为一个布尔值，默认为false
    //监视数据为引用类型时，最好开启深度监视，因为不开的话默认监视该引用类型的地址值。
    obj: {
      deep: true,
      handler(newValue) {
        console.log('obj中的属性值更改了，新值：' + newValue);
      }
    }
  }
```

## props
1. 类型：数组或者对象
2. 功能：用于接收来自父组件的数据
3. 选项：当props为对象时，可以配置选项，来实现高级功能:
  -  `type`: 数据类型 ==> 检测该prop的数据类型是否为给定的类型，不是则控制台抛出警告
  - `default`: any ==> 为该prop设置默认值，如果没有传入值，则使用该默认值。
  - `required`: Boolean ==> 定义该prop是否为必填项，如果设置必填后该prop没有传入，控制台抛出警告。
  - `validator`: Function ==> 自定义验证函数，实参为该prop的值，该函数返回一个布尔值，如果为false，控制台抛出警告。

4. 示例
- 简单数组
```JavaScript {.line-numbers}
Vue.component('son', {
  props: ['message', 'letter']
});
```
- 对象：配置选项
```JavaScript {.line-numbers}
Vue.component('props-demo-advanced', {
  props: {
    //检测height变量的值是否为Number型
    height: Number,

    //检测age变量的值
    //1. 类型是否为Number型
    //2. 提供默认值，如果该prop没有传入，给定默认值0
    //3. 定义该prop为必填项
    //4. 将age的值作为实参传入自定义验证函数，如果返回值返回false，控制台抛出警告。
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
```