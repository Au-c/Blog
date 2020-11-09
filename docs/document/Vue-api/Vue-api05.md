---
title: 全局API
date: 2020-09-05
tags:
 - Vue
 - Vueのapi
categories: 
 - 文档
---
# 全局API
## Vue.directive()
1. 功能：注册或获取全局指令
2. 参数： 
- id { String } 自定义指令的名称
- { Object } 用对象包裹处理函数；
## Vue.filter()
1. 功能：注册或获取全局过滤器
2. 参数：
- id { String } 过滤器的名称
- Function() 处理函数
    - 参数
        - value: 需要处理的数据
        - 额外参数
3. 机制：将数据传到处理函数中，将数据按想要格式输出。
4. 注意传参问题，详见Vue.md