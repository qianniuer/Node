# Node
Node - study

## 模块化 (AMD CMD )规范

模块化(私有化，互相调用，方便代码维护);
1、写法都是统一的
单例模式 , 闭包
函数执行后返回一个引用空间这个空间被外部引用，此空间无法销毁。这就叫闭包 函数执行的时候也会产生一个闭包
requiresjs(依赖解析) seajs(不在维护) eval / new Function
esModule es6规范的 （node里不支持 ）babel进行转义
mjs(没人用)

## commonjs 规范
1.模块实现(一个js文件就是一个模块)为了实现模块化的功能每个文件外面都包含一个闭包
2.规定如何导出一个模块 module.exports 
3.如果导入一个模块  require

## node中有三种模块
- 核心模块。内置模块 fs http  net url util .... node提供的 不需要下载的
- 第三方模块 别人写的 我只需要安装一下 用法和核心模块一样
- 文件模块 自己写的

## node事件环 队列清空后 转化到写个队列
- timers阶段 定时器的回调 
- poll阶段 io的回调，走完后会等待 等定时器到达时候后 执行对应的回调
- check阶段 检查setImmediate
- 当阶段切换时 会执行微任务
- 第一次执行微任务会先执行一次


## 多线程 单线程
- 主线程是单线程的 (node其实也是多线程的 setTimeout线程 ajax)


## 浏览器 (线程 进程)
- js线程
- ui线程

> 一般情况下 ui线程 渲染后 空闲下来 会执行js

> js线程和ui线程 是共享线程的( webworker 进程) 开一个工作者(归主线程来管理的，不能操作dom)
> 如果js是多线程的,不能同时两个线程 操作同一个DOM


## 异步 同步


## 阻塞和非阻塞



## NODE
非阻塞异步io + 事件驱动


## live-server / http-server/ zf-http-server
- 全局安装
```
npm install http-server -g
http-server
```



## queue stack
- queue队列 先进先出 push shift 
- stack栈  函数执行