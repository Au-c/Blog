(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{536:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型、运算符与表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型、运算符与表达式"}},[s._v("#")]),s._v(" 数据类型、运算符与表达式")]),s._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),a("ol",[a("li",[s._v("基本类型：整数类型和浮点类型。")]),s._v(" "),a("li",[s._v("枚举类型：被用来定义在程序中只能赋予其一定的离散整数值的变量。")]),s._v(" "),a("li",[s._v("void 类型：类型说明符 void 表明没有可用的值。")]),s._v(" "),a("li",[s._v("派生类型：它们包括：指针类型、数组类型、结构类型、共用体类型和函数类型。")])]),s._v(" "),a("h3",{attrs:{id:"整数类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数类型"}},[s._v("#")]),s._v(" 整数类型")]),s._v(" "),a("div",{attrs:{align:"left"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20210308212201.png",width:"550"}})]),s._v(" "),a("p",[s._v("上面表格看出有些类型存储大小并不确定，这跟系统位数有关。")]),s._v(" "),a("p",[s._v("可以使用表达式 "),a("code",[s._v("sizeof(type)")]),s._v(" 得到对象或类型的存储字节大小")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<limits.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// %lu 为 32 位无符号整数")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"当前操作系统下的 int 存储大小为：%lu\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"浮点类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点类型"}},[s._v("#")]),s._v(" 浮点类型")]),s._v(" "),a("div",{attrs:{align:"left"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Au-c/PicGo@main/notes/markdownPic/20210308213132.png",width:"550"}})]),s._v(" "),a("h3",{attrs:{id:"void-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#void-类型"}},[s._v("#")]),s._v(" void 类型")]),s._v(" "),a("p",[s._v("通常有如下三种使用情况")]),s._v(" "),a("ol",[a("li",[s._v("函数返回空；")]),s._v(" "),a("li",[s._v("函数参数为空；")]),s._v(" "),a("li",[s._v("指针指向 "),a("code",[s._v("void")]),s._v(";")])]),s._v(" "),a("h2",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" 常量")]),s._v(" "),a("p",[s._v("程序运行过程中，其值不发生变化的量")]),s._v(" "),a("h3",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[s._v("#")]),s._v(" 分类")]),s._v(" "),a("ol",[a("li",[s._v("整型 "),a("code",[s._v("10, -129, 0")])]),s._v(" "),a("li",[s._v("浮点型")])]),s._v(" "),a("ul",[a("li",[s._v("单精度浮点型 "),a("code",[s._v("10.0f, 3.14f")])]),s._v(" "),a("li",[s._v("双精度浮点型 "),a("code",[s._v("10.0, 3.14")])])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("字符型 "),a("code",[s._v("'a', '3'")])]),s._v(" "),a("li",[s._v("字符串型 "),a("code",[s._v('"a", "abc34"')])])]),s._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("h3",{attrs:{id:"什么是变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是变量"}},[s._v("#")]),s._v(" 什么是变量")]),s._v(" "),a("p",[a("strong",[s._v("变量")]),s._v("：是内存中具有特定属性的一个存储单元，用来存放数据（变量的值），数据在程序运行过程中可以改变。")]),s._v(" "),a("p",[a("strong",[s._v("变量名")]),s._v("：用一个名字代表一个对用的存储单元地址。命名规范：字母、数字、下划线，第一个字符必须为字母或者下划线。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("从变量中取值，实际上就是通过变量名找到内存中存储单元的地址，并从该存储单元中读取数据")])]),s._v(" "),a("h3",{attrs:{id:"变量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量类型"}},[s._v("#")]),s._v(" 变量类型")]),s._v(" "),a("p",[a("strong",[s._v("基本类型")])]),s._v(" "),a("ol",[a("li",[s._v("整型"),a("code",[s._v("int")]),s._v("; 4 个字节，取值范围 -2147483648 到 2147483647")]),s._v(" "),a("li",[s._v("字符型 "),a("code",[s._v("char")]),s._v(";一个字节（八位）")]),s._v(" "),a("li",[s._v("浮点型")])]),s._v(" "),a("ul",[a("li",[s._v("单精度浮点型 "),a("code",[s._v("float")]),s._v("; 1位符号，8位指数，23位小数")]),s._v(" "),a("li",[s._v("双精度浮点型 "),a("code",[s._v("double")]),s._v("; 1位符号，11位指数，52位小数")])]),s._v(" "),a("p",[a("strong",[s._v("构造类型")])]),s._v(" "),a("ol",[a("li",[s._v("数组类型 "),a("code",[s._v("[]")])]),s._v(" "),a("li",[s._v("结构类型 "),a("code",[s._v("struct")])]),s._v(" "),a("li",[s._v("联合类型 "),a("code",[s._v("union")])]),s._v(" "),a("li",[s._v("枚举类型 "),a("code",[s._v("enum")])])]),s._v(" "),a("p",[a("strong",[s._v("指针类型(*)")])]),s._v(" "),a("p",[a("strong",[s._v("空类型"),a("code",[s._v("void")])])]),s._v(" "),a("h2",{attrs:{id:"整型数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型数据"}},[s._v("#")]),s._v(" 整型数据")]),s._v(" "),a("h3",{attrs:{id:"符号常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号常量"}},[s._v("#")]),s._v(" 符号常量")]),s._v(" "),a("p",[s._v("使用 关键字 "),a("code",[s._v("int")]),s._v(" 来定义整型数据")]),s._v(" "),a("h3",{attrs:{id:"整型常量的不同进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型常量的不同进制"}},[s._v("#")]),s._v(" 整型常量的不同进制")]),s._v(" "),a("h3",{attrs:{id:"多种进制表示法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多种进制表示法"}},[s._v("#")]),s._v(" 多种进制表示法")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十进制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("037")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 八进制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十六进制")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"字符常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符常量"}},[s._v("#")]),s._v(" 字符常量")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符型常量 使用单引号将字符括起来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符常量参与运算时使用对应的 ASCII 码来进行运算")]),s._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("转义字符")])]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\b'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 回退")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 换行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 横向制表符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\v'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 纵向制表符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 反斜杠")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单引号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 双引号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串结束的标识")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"字符串常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量"}},[s._v("#")]),s._v(" 字符串常量")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串常量使用双引号包裹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a string"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"const-前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-前缀"}},[s._v("#")]),s._v(" "),a("code",[s._v("const")]),s._v(" 前缀")]),s._v(" "),a("p",[s._v("可以使用 "),a("code",[s._v("const")]),s._v(" 前缀声明指定类型的常量: "),a("code",[s._v('const string name = "张三"')])]),s._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" 运算符")]),s._v(" "),a("p",[s._v("比较简单，跳过，之后有个"),a("strong",[s._v("位运算")]),s._v("，如果用到了可以补充一下。")])])}),[],!1,null,null,null);t.default=r.exports}}]);