---
title: 条件渲染
date: 2020-08-15
tags:
 - Vue
 - 笔记
categories: 
 - 笔记
---
# 列表渲染
使用v-for指令来实现重复渲染列表，使用详见 vueのapi文档
## 维护状态
在 vueのapi文档 中，使用 v-for 指令迭代对象时，推荐为重复渲染的DOM模板绑定特殊的attribute key属性，在了解其原因之前先说明Vue的就地更新策略。

### Vue的就地更新策略
Vue使用就地更新策略来更新绑定有v-for指令的列表元素。

**更新机制**
1. 在Vue系统中，列表的每一项都有其索引，当列表数据更新时，Vue会按照索引顺序比对新旧数据。
2. 只再次渲染发生改变的DOM节点，没有更新的列表数据所在的DOM节点会被复用。 这减少了性能开销。

```HTML {.line-numbers}
  <div id="app">
    <!-- 功能：点击按钮往列表尾部添加元素 -->
    <button @click="pushValue()">changeValue</button>
    <br />
    <ul>
      <li v-for="item in arr">{{ item }}</li>
    </ul>
  </div>
```
```JavaScript {.line-numbers}
    const vm = new Vue({
      el: '#app',
      data: {
        arr: [1, 2, 3, 4, 5]
      },
      methods: {
        pushValue() {
          this.arr.push(0);
        }
      }
    })
```
**结果对比**
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201010145531.png" width="400" />  
</div>

由上图可以看出，在列表尾部添加了一项元素。
- 就地更新策略，按照DOM节点的索引顺序从第一项比对前后数据，发现前五项没有更新，复用。
- 检测到新添加了第六项数据，只渲染第六项所更新的数据。(右图可见第六项闪烁)

### 绑定特殊的attribute key属性
::: tip 问题引入
由上例，要注意一句话，就地更新前，会**按照DOM节点的索引顺序**从第一项比对前后数据。
直接修改元素的值或者从最后插入元素，这些都不会更改原来的DOM节点排序。
但情况来了：*从前面后者中间插入DOM节点，这就将DOM节点前后排列的顺序更改。*
:::
```JavaScript {.line-numbers}
  unshiftValue() {
            this.arr.unshift(000);
  }
```

**1. 前后结果对比**
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201010171545.png" width="400" />  
</div>

由上图可以看出，当在列表头部插入一个元素时。
- 就地更新策略，第一项元素变成新添加的，原来各项的次序都加了一
- Vue进行前后对比，各项元素都发生了改变，就全部更新了，这种默认的策略当有大量元素时，性能并不高。

**2. 解决方案：**

为了最大限度的保持元素复用，优化此种情况的性能，引入attribute key，介绍见 vueのapi文档。
```HTML {.line-numbers}
<!-- 注意 :key的预期值要为唯一标识 -->
  <li v-for="item in arr" :key="item">{{ item }}</li>
```
这样，每一项都有自己的的唯一标识后，系统就可以通过另一种方式，通过key属性的不同来决定哪项复用，哪项更新渲染了。
如下，只渲染了添加的第一项，其他的复用了起来。
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20201010174301.png" width="300" />  
</div>