## 什么是Node.js

Node. js是一个基于 Chrome v8引擎的服务器端 JavaScript运行环境；

Node. js是一个事件驱动、非阻塞式I/O的模型，轻量而又高效；

Node. js的包管理器npm是全球最大的开源库生态系统。

## node的构架是什么样子的

主要分为三层

应用app >> V8及node内置架构 >> 操作系统. 

V8是node运行的环境，可以理解为node虚拟机．

node内置架构又可分为三层: 核心模块(javascript实现) >> c++绑定 >> libuv + CAes + http.

<img src="node.assets\image-20220616124354392.png" alt="image-20220616124354392" style="zoom:50%;" />

## 使用场景

- 高并发场景
- 实时应用程序，如聊天和提供实时更新（比如消息推送）的应用程序
- 将视频或其他多媒体内容流式传输给大量观众的流式应用程序
- 其他 I/O 密集型应用程序，如协作平台
- 遵循微服务架构的网络后端
- 客户端逻辑强大的SPA（单页面应用程序）
- 然而，Node.js 的特性使得它对于其他类型的应用程序来说不是一个理想的选择。`执行 CPU 密集型任务的应用程序`（如复杂的数学计算）在使用 CPU 时表现不佳，因为 Node.js 是`单线程`的。

## Node.js的优势

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

> 在NodeJS里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过exports对象的使用将其传递给模块外部。所以，在NodeJS中，用var声明的变量并不属于全局的变量，只在当前模块生效。像global全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值。

Node常见的全局对象有如下一些：

* **global** 表示node.js的全局运行环境
  （JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global）
* **process** 表示node.js的进程状态，global对象的属性
* **console** 用于控制台的输出
* **Class:Buffer** 可以处理二进制以及非Unicode编码的数据
* clearInterval、setInterval
* clearTimeout、setTimeout

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

### golbal

> global是一个全局命名空间对象，下面讲到的process、console、setTimeout等可以放到global中，例如：
>
> ```livecodeserver
> console.log(process === global.process)     //输出true
> ```

### setTimeout(cb, ms)

> **setTimeout(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
>
> 返回一个代表定时器的句柄值。

### clearTimeout(t)

> **clearTimeout( t )** 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 **t** 是通过 setTimeout() 函数创建的定时器。

### setInterval(cb, ms) 

> **setInterval(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
>
> 返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。
>
> setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

### cleatSetInterval()

### Class:Buffer

> Class:Buffer可以用来处理二进制以及非Unicode编码的数据，在Buffer类实例化中存储了原始数据。Buffer类似于一个整数数组，在V8堆原始存储空间给它分配了内存，一旦创建了Buffer实例，则无法改变大小。

### console

> console主要用来打印stdout和stderr，最常用的比如日志输出：`console.log`。清空控制台的命令为：`console.clear`。如果需要打印函数的调用栈，可以使用命令`console.trace`。

### process

> process表示进程对象，提供有关当前过程的信息和控制。包括在执行node程序的过程中，如果需要传递参数，我们想要获取这个参数需要在process内置对象中。比如，我们有如下一个文件：
>
> ```arcade
> process.argv.forEach((val, index) => {
>    console.log(`${index}: ${val}`);
> });
> ```
>
> 当我们需要启动一个进程时，可以使用下面的命令：
>
> ```crmsh
>  node index.js 参数...
> ```

## 模块中的全局对象

除了系统提供的全局对象外，还有一些只是在模块中出现，看起来像全局变量，如下所示：

> - __dirname
> - __filename
> - exports
> - module
> - require

### __dirname

> __dirname主要用于获取当前文件所在的路径，不包括后面的文件名。比如，在`/Users/mjr` 中运行 `node example.js`，打印结果如下：
>
> ```js
> console.log(__dirname);         // 打印: /Users/mjr
> ```

### __filename

> __filename用于获取当前文件所在的路径和文件名称，包括后面的文件名称。比如，在`/Users/mjr` 中运行 `node example.js`，打印的结果如下：
>
> ```js
> console.log(__filename);// 打印: /Users/mjr/example.js
> ```

### **exports**

module.exports 用于导出一个指定模块所的内容，然后也可以使用require() 访问里面的内容。

```js
exports.name = name;
exports.age = age;
exports.sayHello = sayHello;
```

### **require**

require主要用于引入模块、 JSON、或本地文件， 可以从 node_modules 引入模块。可以使用相对路径引入本地模块或JSON文件，路径会根据__dirname定义的目录名或当前工作目录进行处理。

## 对fs模块的理解

### fs是什么

fs（filesystem）是文件系统模块，该模块提供本地文件的读写能力，基本上是POSIX文件操作命令的简单包装。可以说，所有与文件的操作都是通过fs核心模块来实现的。

使用之前，需要先导入fs模块，如下：

```js
const fs = require('fs');
```

### 文件基础知识

计算机中，有关于文件的基础知识有如下一些：

- 权限位 mode
- 标识位 flag
- 文件描述为 fd

#### 权限位mode

![image-20220621125654511](node.assets\image-20220621125654511.png)

针对文件所有者、文件所属组、其他用户进行权限分配，其中类型又分成读、写和执行，具备权限位4、2、1，不具备权限为0。如在linux查看文件权限位的命令如下：

```brainfuck
drwxr-xr-x 1 PandaShen 197121 0 Jun 28 14:41 core
-rw-r--r-- 1 PandaShen 197121 293 Jun 23 17:44 index.md
```

在开头前十位中，d为文件夹，-为文件，后九位就代表当前用户、用户所属组和其他用户的权限位，按每三位划分，分别代表读（r）、写（w）和执行（x），- 代表没有当前位对应的权限。

#### 标识位

标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，如下表所示：

![image-20220621125823902](node.assets\image-20220621125823902.png)

#### 文件描述fd

操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，文件操作使用这些文件描述符来识别与追踪每个特定的文件。

Window 系统使用了一个不同但概念类似的机制来追踪资源，为方便用户，NodeJS 抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符。

在 NodeJS 中，每操作一个文件，文件描述符是递增的，文件描述符一般从 3 开始，因为前面有 0、1、2三个比较特殊的描述符，分别代表 process.stdin（标准输入）、process.stdout（标准输出）和 process.stderr（错误输出）。

### 常用方法

由于fs模块主要是操作文件的，所以常见的文件操作方法有如下一些：

- 文件读取
- 文件写入
- 文件追加写入
- 文件拷贝
- 创建目录

#### 文件读取

常用的文件读取有readFileSync和readFile两个方法。

`readFileSync表示同步读取`，如下：

```js
const fs = require("fs");

let buf = fs.readFileSync("1.txt");
let data = fs.readFileSync("1.txt", "utf8");

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(data); // Hello
```

- 第一个参数为读取文件的路径或文件描述符。
- 第二个参数为 options，默认值为 null，其中有 encoding（编码，默认为 null）和 flag（标识位，默认为 r），也可直接传入 encoding。

`readFile为异步读取方法`， readFile 与 readFileSync 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 err（错误）和 data（数据），该方法没有返回值，回调函数在读取文件成功后执行。

```javascript
const fs = require("fs");

fs.readFile("1.txt", "utf8", (err, data) => {
   if(!err){
       console.log(data);         // Hello
   }
});
```

#### 文件写入

文件写入需要用到writeFileSync和writeFile两个方法。

`writeFileSync表示同步写入`，如下所示。

```js
const fs = require("fs");

fs.writeFileSync("2.txt", "Hello world");
let data = fs.readFileSync("2.txt", "utf8");

console.log(data); // Hello world
```

- 第一个参数为写入文件的路径或文件描述符。
- 第二个参数为写入的数据，类型为 String 或 Buffer。
- 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），也可直接传入 encoding。

`writeFile表示异步写入`，writeFile 与 writeFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件写入数据成功后执行。

```javascript
const fs = require("fs");

fs.writeFile("2.txt", "Hello world", err => {
    if (!err) {
        fs.readFile("2.txt", "utf8", (err, data) => {
            console.log(data);       // Hello world
        });
    }
});
```

#### 文件追加写入

文件追加写入需要用到appendFileSync和appendFile两个方法。

`appendFileSync表示同步写入`，如下。

```js
const fs = require("fs");

fs.appendFileSync("3.txt", " world");
let data = fs.readFileSync("3.txt", "utf8");
```

- 第一个参数为写入文件的路径或文件描述符。
- 第二个参数为写入的数据，类型为 String 或 Buffer。
- 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 a）和 mode（权限位，默认为 0o666），也可直接传入 encoding。

`appendFile表示异步追加写入`，方法 appendFile 与 appendFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件追加写入数据成功后执行，如下所示。

```javascript
const fs = require("fs");

fs.appendFile("3.txt", " world", err => {
    if (!err) {
        fs.readFile("3.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});
```

#### 文件拷贝

#### 创建目录

创建目录主要有mkdirSync和mkdir两个方法。

`mkdirSync为同步创建`，参数为一个目录的路径，没有返回值，在创建目录的过程中，必须保证传入的路径前面的文件目录都存在，否则会抛出异常。

```js
// 假设已经有了 a 文件夹和 a 下的 b 文件夹
fs.mkdirSync("a/b/c")
```

`mkdir为异步创建`，第二个参数为回调函数，如下所示。

```js
fs.mkdir("a/b/c", err => {
    if (!err) console.log("创建成功");
});
```

## **对process的理解**

### 基本概念

我们知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器。当我们启动一个js文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享。

process 对象是Node的一个全局变量，提供了有关当前 Node.js 进程的信息并对其进行控制。
由于JavaScript是一个单线程语言，所以通过node xxx启动一个文件后，只有一条主线程。

### 常用属性和方法

process的常见属性如下：

- process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
- process.nextTick：这个在谈及 EventLoop 时经常为会提到
- process.pid：获取当前进程id
- process.ppid：当前进程对应的父进程
- process.cwd()：获取当前进程工作目录
- process.platform：获取当前进程运行的操作系统平台
- process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
  进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
- 三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
- process.title：用于指定进程名称，有的时候需要给进程指定一个名称

process.stdin、 process.stdout、 process.stderr、process.on、 process.env、 process.argv、 process.arch、process.platform、 process.exit

## 对Stream的理解

### 基本概念

流（Stream）是一种数据传输的手段，是一种端到端信息交换的方式，而且是有顺序的，是逐块读取数据、处理内容，用于顺序读取输入或写入输出。在Node中，Stream分成三部分：source、dest、pipe。

其中，在source和dest之间有一个连接的管道pipe，它的基本语法是source.pipe(dest)，source和dest就是通过pipe连接，让数据从source流向dest，如下图所示：
![hhh](node.assets\1460000040937013.png)

### 流的分类

在Node，流可以分成四个种类：

- **可写流**：可写入数据的流，例如 fs.createWriteStream() 可以使用流将数据写入文件。
- **可读流**： 可读取数据的流，例如fs.createReadStream() 可以从文件读取内容。
- **双工流**： 既可读又可写的流，例如 net.Socket。
- **转换流**： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据。

在Node的HTTP服务器模块中，request 是可读流，response 是可写流。对于fs 模块来说，能同时处理可读和可写文件流可读流和可写流都是单向的，比较容易理解。而Socket是双向的，可读可写。

#### 双工流

在Node中，比较的常见的全双工通信就是websocket，因为发送方和接受方都是各自独立的方法，发送和接收都没有任何关系。
![在这里插入图片描述](node.assets\1460000040937014.png)
基本的使用方法如下：

```javascript
const { Duplex } = require('stream');

const myDuplex = new Duplex({
  read(size) {
    // ...
  },
  write(chunk, encoding, callback) {
    // ...
  }
});
```

### 使用场景

流的常见使用场景有：

- get请求返回文件给客户端
- 文件操作
- 一些打包工具的底层操作

#### 网络请求

流一个常见的使用场景就是网络请求，比如使用stream流返回文件，res也是一个stream对象，通过pipe管道将文件数据返回。

```js
const server = http.createServer(function (req, res) {
    const method = req.method;  
    // get 请求
    if (method === 'GET') { 
        const fileName = path.resolve(__dirname, 'data.txt');
        let stream = fs.createReadStream(fileName);
        stream.pipe(res);   
    }
});
server.listen(8080);
```

#### 文件操作

文件的读取也是流操作，创建一个可读数据流readStream，一个可写数据流writeStream，通过pipe管道把数据流转过去。

```javascript
const fs = require('fs')
const path = require('path')

// 两个文件名
const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1)
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// 通过 pipe执行拷贝，数据流转
readStream.pipe(writeStream)
// 数据读取完成监听，即拷贝完成
readStream.on('end', function () {
    console.log('拷贝完成')
})
```

另外，一些打包工具，Webpack和Vite等都涉及很多流的操作。







## **console有哪些常用方法？**

console.log/console. info、console.error/console.warning、console.time/console.timeEnd 、console.trace、console .table。

## **Node.js有哪些定时功能？**

setTimeout/clearTimeout, setInterval/clearInterval、 setImmediate/clearImmediate、 process. nextTick。

## 参考链接

1. 【前端面试题】—53道常见NodeJS基础面试题（附答案）：https://jishuin.proginn.com/p/763bfbd4ec80
2. 15 个常见的 Node.js 面试问题及答案：https://www.infoq.cn/article/qbjxf0413reeca2exgwd
3. node-interview-questions：https://github.com/jimuyouyou/node-interview-questions
4. 菜鸟教程：https://www.runoob.com/nodejs/nodejs-tutorial.html
4. https://fairyly.github.io/interview/5.1.2%20node%20%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98.html
4. https://segmentfault.com/a/1190000040937008





