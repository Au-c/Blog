---
title: 特殊attribute
date: 2020-09-05
tags:
 - Vue
 - Vueのapi
categories: 
 - 文档
---
# 特殊attribute
## key
key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，
- 功能：当数据发生变动时，Vue内部系统自动对比前后DOM节点数据，key为每个节点添加唯一标识，用来区分各个节点。
- 使用：一般使用v-bind动态绑定此属性    `v-bind: key = "唯一标识"`
- TODO