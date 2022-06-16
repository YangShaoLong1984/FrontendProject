## 什么是Node.js

Node. js是一个基于 Chrome v8引擎的服务器端 JavaScript运行环境；

Node. js是一个事件驱动、非阻塞式I/O的模型，轻量而又高效；

Node. js的包管理器npm是全球最大的开源库生态系统。

## node的构架是什么样子的

主要分为三层

应用app >> V8及node内置架构 >> 操作系统. 

V8是node运行的环境，可以理解为node虚拟机．

node内置架构又可分为三层: 核心模块(javascript实现) >> c++绑定 >> libuv + CAes + http.

<img src="E:\FrontendProject\Interviewer\node\node.assets\image-20220616124354392.png" alt="image-20220616124354392" style="zoom:50%;" />

## 使用场景

- 高并发场景
- 实时应用程序，如聊天和提供实时更新（比如消息推送）的应用程序
- 将视频或其他多媒体内容流式传输给大量观众的流式应用程序
- 其他 I/O 密集型应用程序，如协作平台
- 遵循微服务架构的网络后端
- 客户端逻辑强大的SPA（单页面应用程序）
- 然而，Node.js 的特性使得它对于其他类型的应用程序来说不是一个理想的选择。`执行 CPU 密集型任务的应用程序`（如复杂的数学计算）在使用 CPU 时表现不佳，因为 Node.js 是`单线程`的。

### Node.js的优势

（1）简单， Node. js用 JavaScript、JSON进行编码，简单好学。

（2）功能强大，非阻塞式I/O，在较慢的网络环境中，可以分块传输数据，事件驱动，擅长高并发访问。

（3）轻量级， Node. js本身既是代码又是服务器，前后端使用同一语言。

（4）可扩展，可以轻松应对多实例、多服务器架构，同时有海量的第三方应用组件。

（5）总结起来node有以下几个特点:简单强大，轻量可扩展．简单体现在node使用的是javascript,json来进行编码，人人都会；强大体现在非阻塞IO,可以适应分块传输数据，较慢的网络环境，尤其擅长高并发访问；轻量体现在node本身既是代码，又是服务器，前后端使用统一语言;可扩展体现在可以轻松应对多实例，多服务器架构，同时有海量的第三方应用组件．

## Node.js与JavaScript对比

| JavaScript                                                   | Node.js                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| JavaScript是—种编程语言,可以在任何具有合适浏览器引擎的网络浏览器中运行。 | Node.js是一个为JavaScript设计的解释器和运行时环境。Node.js内置了一些增强JavaScript编程功能模块。 |
| 除了Node.js，JavaScript用于网络应用程序的客户端,特别是用于开发动态特性。 | Node.js 可以在任何操作系统上用于开发与系统硬件交互的应用程序，特别是对于web 后端。 |
| JavaScript可以在不同的浏览器引擎上运行，比如v8 (Google Chrome) . Spider Monkey(Firefox)和JavaScript Core(Safari) | Node.js 仅在Chrome 使用的V8引擎上运行                        |

## node有哪些核心模块

EventEmitter, Stream, FS, Net和全局对象

## **Node. js有哪些全局对象？**

* **global** 表示node.js的全局运行环境
  （JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global）
* **process** 表示node.js的进程状态，global对象的属性
* **console** 用于控制台的输出
* **Class:Buffer** 可以处理二进制以及非Unicode编码的数据
* module和exports

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，`所有全局变量（除了 global 本身以外）都是 global 对象的属性`。

在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

* golbal

> global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
>
> * 在最外层定义的变量；
>
> * 全局对象的属性；
>
> * 隐式定义的变量（未定义直接赋值的变量）。
>
> 当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注意的是，`在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文`。

## 全局对象与全局变量

* ### __filename

> 获取文件的路径。表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。（包含自身）

* ### __dirname

> 获取脚本所在的目录。表示当前执行脚本所在的目录。（不包含自身）

* ### setTimeout(cb, ms)

> **setTimeout(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
>
> 返回一个代表定时器的句柄值。

* ### clearTimeout(t)

> **clearTimeout( t )** 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 **t** 是通过 setTimeout() 函数创建的定时器。

* ### setInterval(cb, ms) 

> **setInterval(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
>
> 返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。
>
> setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

* ### cleatSetInterval()

* ### console

* ### process

## **process有哪些常用方法？**

process.stdin、 process.stdout、 process.stderr、process.on、 process.env、 process.argv、 process.arch、process.platform、 process.exit

## **console有哪些常用方法？**

console.log/console. info、console.error/console.warning、console.time/console.timeEnd 、console.trace、console .table。

## **Node.js有哪些定时功能？**

setTimeout/clearTimeout, setInterval/clearInterval、 setImmediate/clearImmediate、 process. nextTick。

## 参考链接

1. 【前端面试题】—53道常见NodeJS基础面试题（附答案）：https://jishuin.proginn.com/p/763bfbd4ec80
2. 15 个常见的 Node.js 面试问题及答案：https://www.infoq.cn/article/qbjxf0413reeca2exgwd
3. node-interview-questions：https://github.com/jimuyouyou/node-interview-questions
4. 菜鸟教程：https://www.runoob.com/nodejs/nodejs-tutorial.html





