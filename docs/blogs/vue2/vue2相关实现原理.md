---
title: vue2.0 相关实现原理记录
date: 2021-02-25
# sticky: 1 # 文章排序
categories:  # 分类
 - vue2源码
tags:
 - vue2
---
# vue2.0 相关实现原理记录
## vue底层渲染过程大致可以分成4个阶段：
* template 模板解析后生成AST语法树
模板解析：通过正则等方式提取出 <template></template> 模板里的标签元素、属性、变量等信息，并解析成抽象语法树 AST
* AST树解析生成对应的render函数：
AST是Abstract Syntax Tree的简称，Vue使用HTML的Parser将HTML模板解析为**AST语法树**，并且对AST进行一些优化的标记处理，提取最大的静态树，方便Virtual DOM时直接跳过Diff。
* 数据通过render函数（渲染函数）解析生成VNode
Virtual DOM：虚拟DOM树，Vue的Virtual DOM Patching算法是基于`Snabbdom`库的实现，并在些基础上作了很多的调整和改进。
* VNode经过diff和patch后生成真实DOM展示

## 核心概念
### 虚拟dom
用js模拟dom结构，计算最小变更，操作dom
```javascript
<div id="div1" class="container" style="color: red">
    <p>vdom</p>
    <ul style="font-size: 20px">
        <li>a</li>
    </ul>
</div>
js描述如下：
{
    tag: 'div',
    sel: {
        id: 'div1',
        className: 'container'
    },
    props: { style: 'color: red' },
    children: [
        {
            tag: 'p',
            children: 'vdom'
        },
        {
            tag: 'ul',
            props: { style: 'font-size: 20px' },
            children: [
                {
                    tag: 'li',
                    children: 'a'
                }
            ]
        }
    ]
}
```


### vue中 diff算法
只比较同一层级，不跨级比较。
tag不相同，直接删除重建，不做再深度比较。
tag和key相同，认为是同一节点，不做再深度比较。

* 最小量更新，key很重要是节点的唯一标识，在更改前后告诉diff他是同一节点
* 只有是同一个虚拟节点才进行精细化比较，否则就暴力删除旧的插入新的，
  同一虚拟节点？选择器相同，且key相同
* 只进行同层比较，不进行跨层级比较。
  即使是同一片虚拟节点， 跨层了也不会进行diff 暴力删除旧的插入新的

### vue中的 render函数
* 什么是render函数？
vue中在一些复杂场景下使用template模板不太方便，例如需要引入大量子组件时，使用template模板会使代码重复冗余，这时用render函数就可以轻松解决问题，而用render函数构建DOM，vue也免了去转译的过程。
在vue中我们使用模板HTML语法组建页面的，使用render函数我们可以用js语言来构建DOM。
* render函数作用？
生成虚拟DOM
当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给他起了个名字叫`createElement` 还有约定的简写叫`h`, vm中有一个方法`_c`,也是这个函数的别名。
* `render`函数的使用
比如说我们需要写很多 if 判断的时候

```javascript
<template>
    <h1 v-if="level === 1">
      <a href="xxx">
        <slot></slot>
      </a>
    </h1>
    <h2 v-else-if="level === 2">
      <a href="xxx">
        <slot></slot>
      </a>
    </h2>
    <h3 v-else-if="level === 3">
      <a href="xxx">
        <slot></slot>
      </a>
    </h3>
</template>
<script>
  export default {
    props:['level']
  }
</script>
```

直接写 render
```javascript
<script>
  export default {
    props:['level'],
    render(h){
      return h('h' + this.level, this.$slots.default())
    }
  }
</script>
```





### 数组数据响应式的处理原理
重新数组方法，以`Arrap.prototype`为原型创建了一个`arrayMethods`的对象，在使用`es6`的一个强硬的方法`object.setPrototytypeOf(o,arrayMethods)`,让数组的__proto__指向`arrayMethods`

## vue2.0 源码地址
* 项目地址：<https://github.com/vuejs/vue>
* 文件结构核心部分
```
src
  compiler 编译器相关
  core 核心代码
    components 通用组件，如 keep-alive
    global-api 全局 api，如$set、$delete
    instance 构造函数等
    observer 响应式相关
    util
    vdom 虚拟 dom
```

## vue2响应式原理-底层源码核心类
栗子：
```javascript
<div id="mvvm-app">
  <input type="text" v-model="word">
  <p>{{word}}</p>
  <button v-on:click="sayHi">change model</button> //点击这个button，word的值会发生改变
</div>

<script src="./js/observer.js"></script>
<script src="./js/watcher.js"></script>
<script src="./js/compile.js"></script>
<script src="./js/mvvm.js"></script>
<script>
  var vm = new MVVM({
    el: '#mvvm-app',
    data: {
      word: 'Hello World!'
    },
    methods: {
      sayHi: function() {
        this.word = 'Hi, everybody!';
      }
    }
  });
</script>

```
实现这种数据双向绑定的效果，需要以下几大模块：

* `Compile -模板编译`：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数.
Compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的*观察者watcher*，将来一旦数据有变动，收到通知触发回调函数进行更新视图。

* `Observer -数据劫持`：能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者.
Observer的核心是通过Obeject.defineProperty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher。
get里: 初始化订阅数据变化时 往dep里添加观察者与其关联
set里: 通知；数据发生变化时dep去通知*观察者watcher*

* `dep类 -发布者`：
作用：收集对应*观察者watcher*、通知watcher更新。
有多少属性dep里就有多少个watcher
*订阅：addSub()*
*发布：notify()*

* `Watcher -观察者（订阅者）`：作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，在更改数据时进行watcher监听，把新值callback。






