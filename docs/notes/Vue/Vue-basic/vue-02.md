---
title: Vue实例
date: 2020-08-01
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# Vue实例
## 创建Vue实例
每一个Vue应用，都是通过Vue()构造函数创建一个新的实例开始的：
```JavaScript {.line-numbers}
const vm = new Vue({
    //选项对象
});
```
1. Vue()构造函数参数为一个对象，成为选项对象，内部配置各种选项来实现逻辑。

2. 实例常用vm来表示，这是一种规范，意味MVVM模型中的VM。
## 数据与方法
1. 当一个**实例被创建时**，该实例中的数据选项中的所有property都会被添加至Vue的响应式系统中，当数据发生变化时，视图层也会随之变动，再次渲染。

2. 注意：
    - 只有在创建实例时，本就存在于数据选项中的property才是响应式的，后来添加的不会响应。
    - 强制性冻结数据对象，使响应式系统无法追踪变化
        Object.freeze()
        - 参数：需要冻结的对象
        - 返回值：冻结后的对象
        - 冻结后，任何修改对象的操作，都会报错
        - 浅冻结与深冻结：
        freeze()为浅冻结，只会冻结一层，如果该对象其中有属性值为应用类型，依然可以修改该属性指向的引用类型。
            利用递归可以实现深冻结，[详见MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
        - 利用Object.freeze()可以冻结data选项中的数据，釜底抽薪，使响应式系统无法追踪变化