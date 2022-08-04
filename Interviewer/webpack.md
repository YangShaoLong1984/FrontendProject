参考：

1. 尚硅谷：[视频地址](https://www.bilibili.com/video/BV14T4y1z7sw?p=39&spm_id_from=333.1007.top_right_bar_window_history.content.click)
2. 官方文档-中文版：https://www.webpackjs.com/concepts/
3. 印记中文翻译版：https://webpack.docschina.org/concepts/

### 为什么需要打包工具

> 开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器等语法进行开发。
>
> 这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法，才能运行。
>
> 所以我们需要打包工具帮我们做完这些事。
>
> 除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。
>
> #### 常见打包工具：
>
> - Grunt
>
> - Gulp
>- Parcel
> 
>- Webpack
> 
>- Rollup
> 
>- Vite

### 概念

> 本质上，**webpack** 是一个用于现代 JavaScript 应用程序的 *`静态模块打包工具`*。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 *bundles*，它们均为静态资源，用于展示你的内容。
>
> 适用场景：webpack适⽤于⼤型复杂的前端站点构建: webpack有强⼤的loader和插件⽣态,打包后的⽂件实际上就是⼀个⽴即执⾏函数，这个⽴即执⾏函数接收⼀个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。⽴即执⾏函数内部则处理模块之间的引⽤，执⾏模块等,这种情况更适合⽂件依赖复杂的应⽤开发。
>
> webpack特点：⾃动化处理模块，webpack把⼀切当成模块。

###  5 大核心概念

> * #### entry（入口）：指示 Webpack 从哪个文件开始打包
>
> **入口起点(entry point)** 指示 webpack 应该使用哪个模块，来作为构建其内部 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
>
> 默认值是 `./src/index.js`，但你可以通过在 [webpack configuration](https://webpack.docschina.org/configuration) 中配置 `entry` 属性，来指定一个（或多个）不同的入口起点。例如：
>
> ```js
> module.exports = {
>   entry: './path/to/my/entry/file.js',
> };
> ```
>
> > ps:[绝对路径](https://www.baidu.com/s?wd=绝对路径&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3rjN-mvNWuW6dmWDdnv7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPjTLnjfkPjfL)：[绝对路径](https://www.baidu.com/s?wd=绝对路径&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3rjN-mvNWuW6dmWDdnv7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPjTLnjfkPjfL)就是你的主页上的文件或目录在硬盘上真正的路径，(URL和物理路径)例如： C:\xyz\test.txt 代表了test.txt文件的绝对路径。
> >
> > [相对路径](https://www.baidu.com/s?wd=相对路径&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3rjN-mvNWuW6dmWDdnv7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPjTLnjfkPjfL)：相对于某个基准目录的路径。包含Web的[相对路径](https://www.baidu.com/s?wd=相对路径&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3rjN-mvNWuW6dmWDdnv7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPjTLnjfkPjfL)（HTML中的相对目录），例如：在 Servlet中，"/"代表Web应用的根目录。和物理路径的相对表示，例如："./" 代表[当前目录](https://www.baidu.com/s?wd=当前目录&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3rjN-mvNWuW6dmWDdnv7b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPjTLnjfkPjfL), "../"代表上级目录。这种类似的表示，也是属于相对路径。
>
> * #### output（输出）：指示 Webpack 打包完的文件 bundle 输出到哪里去，如何命名等
>
> **output** 属性告诉 webpack 在哪里输出它所创建的 *bundle*，以及如何命名这些文件。主要输出文件的默认值是 `./dist/main.js`，其他生成文件默认放置在 `./dist` 文件夹中。
>
> 你可以通过在配置中指定一个 `output` 字段，来配置这些处理过程：
>
> **webpack.config.js**
>
> ```javascript
> const path = require('path');
> 
> module.exports = {
>   entry: './path/to/my/entry/file.js',
>   output: {
>     path: path.resolve(__dirname, 'dist'),
>     filename: 'my-first-webpack.bundle.js',
>   },
> };
> ```
>
> * #### loader（加载器）:webpack 本身只能处理 js、json等资源，webpack解析其他资源需要借助 loader
>
> webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。**loader** 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 [模块](https://webpack.docschina.org/concepts/modules)，以供应用程序使用，以及被添加到依赖图中。
>
> 在更高层面，在 webpack 的配置中，**loader** 有两个属性：
>
> 1. `test` 属性，识别出哪些文件会被转换。
> 2. `use` 属性，定义出在进行转换时，应该使用哪个 loader。
>
> **webpack.config.js**
>
> ```javascript
> const path = require('path');
> 
> module.exports = {
>   output: {
>     filename: 'my-first-webpack.bundle.js',
>   },
>   module: {
>     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
>   },
> };
> ```
>
> 以上配置中，对一个单独的 module 对象定义了 `rules` 属性，里面包含两个必须属性：`test` 和 `use`。这告诉 webpack 编译器(compiler) 如下信息：
>
> > “嘿，webpack 编译器，当你碰到「在 `require()`/`import` 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先 **use(使用)** `raw-loader` 转换一下。”
>
> * #### plugins（插件）：扩展 Webpack 的功能
>
> loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
>
> 想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建一个插件实例。
>
> **webpack.config.js**
>
> ```javascript
> const HtmlWebpackPlugin = require('html-webpack-plugin');
> const webpack = require('webpack'); // 用于访问内置插件
> 
> module.exports = {
>   module: {
>     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
>   },
>   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
> };
> ```
>
> 在上面的示例中，`html-webpack-plugin` 为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。
>
> * ##### mode（模式）：主要两种，开发模式：development、生产模式：production 、不使用任何默认优化选项：none
>
> 通过选择 `development`, `production` 或 `none` 之中的一个，来设置 `mode` 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 `production`。
>
> ```javascript
> module.exports = {
>   mode: 'production',
> };
> ```
>
> * #### 其他 浏览器兼容性(browser compatibility)
>
>   Webpack 支持所有符合 [ES5 标准](https://kangax.github.io/compat-table/es5/) 的浏览器（不支持 IE8 及以下版本）。webpack 的 `import()` 和 `require.ensure()` 需要 `Promise`。如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 [提前加载 polyfill](https://webpack.docschina.org/guides/shimming/)。
>
> * #### 其它 环境(environment)
>
>   Webpack 5 运行于 Node.js v10.13.0+ 的版本。

### 如何处理样式资源-以css为例

> #### 介绍
>
> Webpack 本身是不能识别样式资源的，所以我们需要借助 Loader 来帮助 Webpack 解析样式资源
>
> 我们找 Loader 都应该去官方文档中找到对应的 Loader，然后使用
>
> 官方文档找不到的话，可以从社区 Github 中搜索查询
>
> #### 1. 下载包
>
> ```js
> npm i css-loader style-loader -D
> ```
>
> #### 2. 功能介绍
>
> - `css-loader`：负责将 Css 文件编译成 Webpack 能识别的模块
> - `style-loader`：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容
>
> ####  3. 配置
>
> ```js
> module: {
>     rules: [
>       {
>         // 用来匹配 .css 结尾的文件
>         test: /\.css$/,
>         // use 数组里面 Loader 执行顺序是从右到左
>         use: ["style-loader", "css-loader"],
>       },
>     ],
> },
> ```
>
> #### 4. 添加 Css 资源
>
> #### 5. 运行指令
>
> ```js
> npx webpack
> ```

### 处理图片资源

> 过去在 Webpack4 时，我们处理图片资源通过 `file-loader` 和 `url-loader` 进行处理
>
> 现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源
>
> #### 1. 配置
>
> ```js
> module: {
>     rules: [
>       {
>         test: /\.(png|jpe?g|gif|webp)$/,
>         type: "asset",
>       },
>      ]
> ```
>
> #### 2. 添加图片资源
>
> - src/images/1.jpeg
> - src/images/2.png
> - src/images/3.gif
>
> #### 3. 使用图片
>
> - src/less/index.less
> - 其它省略
>
> ```css
> .box2 {
>   width: 100px;
>   height: 100px;
>   background-image: url("../images/1.jpeg");
>   background-size: cover;
> }
> ```
>
> #### 4. 运行指令 npx webpack
>
> #### 5. 输出资源情况
>
> 此时如果查看 dist 目录的话，会发现多了三张图片资源
>
> 因为 Webpack 会将所有打包好的资源输出到 dist 目录下
>
> - 为什么样式资源没有呢？
>
> 因为经过 `style-loader` 的处理，样式资源打包到 main.js 里面去了，所以没有额外输出出来
>
> #### 6. 对图片资源进行优化
>
> 将小于某个大小的图片转化成 data URI 形式（Base64 格式）
>
> ```js
> {
>     test: /\.(png|jpe?g|gif|webp)$/,
>     type: "asset",
>     parser: {
>       dataUrlCondition: {
>         maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
>       }
>     }
> },
> ```
>
> - 优点：减少请求数量
> - 缺点：体积变得更大

### 处理js资源

> js 资源 Webpack 不能已经处理了吗，为什么我们还要处理呢？
>
> 原因是 Webpack 对 js 处理是有限的，只能编译 js 中 ES 模块化语法，不能编译其他语法，导致 js 不能在 IE 等浏览器运行，所以我们希望做一些兼容性处理。
>
> 其次开发中，团队对代码格式是有严格要求的，我们不能由肉眼去检测代码格式，需要使用专业的工具来检测。
>
> - 针对 js 兼容性处理，我们使用 Babel 来完成
> - 针对代码格式，我们使用 Eslint 来完成

#### Eslint

> 可组装的 JavaScript 和 JSX 检查工具。
>
> 这句话意思就是：它是用来检测 js 和 jsx 语法的工具，可以配置各项功能
>
> 我们使用 Eslint，关键是写 Eslint 配置文件，里面写上各种 rules 规则，将来运行 Eslint 时就会以写的规则对代码进行检查
>
> ##### 1. 配置文件
>
> 配置文件由很多种写法：
>
> - .eslintrc.*：新建文件，位于项目根目录
>   - `.eslintrc`
>   - `.eslintrc.js`
>   - `.eslintrc.json`
>   - 区别在于配置格式不一样
> - `package.json` 中 `eslintConfig`：不需要创建文件，在原有文件基础上写
>
> ESLint 会查找和自动读取它们，所以以上配置文件只需要存在一个即
>
> ##### 2 具体配置
>
> 以 `.eslintrc.js` 配置文件为例：
>
> ```js
> module.exports = {
>   // 解析选项
>   parserOptions: {},
>   // 具体检查规则
>   rules: {},
>   // 继承其他规则
>   extends: [],
>   // ...
>   // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
> };
> ```
>
> 1. parserOptions 解析选项
>
> ```js
> parserOptions: {
>   ecmaVersion: 6, // ES 语法版本
>   sourceType: "module", // ES 模块化
>   ecmaFeatures: { // ES 其他特性
>     jsx: true // 如果是 React 项目，就需要开启 jsx 语法
>   }
> }
> ```
>
> 2. rules 具体规则
>
> - `"off"` 或 `0` - 关闭规则
> - `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
> - `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)
>
> ```js
> rules: {
>   semi: "error", // 禁止使用分号
>   'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句，否则警告
>   'default-case': [
>     'warn', // 要求 switch 语句中有 default 分支，否则警告
>     { commentPattern: '^no default$' } // 允许在最后注释 no default, 就不会有警告了
>   ],
>   eqeqeq: [
>     'warn', // 强制使用 === 和 !==，否则警告
>     'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
>   ],
> }
> ```
>
> 更多规则详见：[规则文档](https://eslint.bootcss.com/docs/rules/)
>
> 3. extends 继承
>
> 开发中一点点写 rules 规则太费劲了，所以有更好的办法，继承现有的规则。
>
> 现有以下较为有名的规则：
>
> - [Eslint 官方的规则open in new window](https://eslint.bootcss.com/docs/rules/)：`eslint:recommended`
> - [Vue Cli 官方的规则open in new window](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-eslint)：`plugin:vue/essential`
> - [React Cli 官方的规则open in new window](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app)：`react-app`
>
> ```javascript
> // 例如在React项目中，我们可以这样写配置
> module.exports = {
>   extends: ["react-app"],
>   rules: {
>     // 我们的规则会覆盖掉react-app的规则
>     // 所以想要修改规则直接改就是了
>     eqeqeq: ["warn", "smart"],
>   },
> };
> ```
>
> #### 3 在webpack中使用
>
> 1. 下载包：npm i eslint-webpack-plugin eslint -D
> 2. 定义 ESLinit 配置文件
> 3. 修改webpack.config.js配置文件
>
> ```js
> const ESLintWebpackPlugin = require("eslint-webpack-plugin");
> module.exports = {
>   plugins: [
>     new ESLintWebpackPlugin({
>       // 指定检查文件的根目录
>       context: path.resolve(__dirname, "src"),
>     }),
>   ],
> }
> ```
>
> 4. 运行 npx webpack，控制台检查效果
> 5. 打开 VSCode，下载 Eslint 插件，即可不用编译就能看到错误，可以提前解决

#### Babel

> JavaScript 编译器。
>
> 主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中
>
> > babel原理：
> >
> > babel 的转译过程也分为三个阶段，这三步具体是： 
> >
> > - **解析 Parse**: 将代码解析⽣成抽象语法树（AST），即词法分析与语法分析的过程；
> > - **转换 Transform**: 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在此过程中进⾏添加、更新及移除等操作；
> > - **⽣成 Generate**: 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator。
>
> ##### 1. 配置文件
>
> 配置文件由很多种写法：
>
> - ```
>   babel.config.*
>   ```
>
>   ：新建文件，位于项目根目录
>
>   - `babel.config.js`
>   - `babel.config.json`
>
> - ```
>   .babelrc.*
>   ```
>
>   ：新建文件，位于项目根目录
>
>   - `.babelrc`
>   - `.babelrc.js`
>   - `.babelrc.json`
>
> - `package.json` 中 `babel`：不需要创建文件，在原有文件基础上写
>
> Babel 会查找和自动读取它们，所以以上配置文件只需要存在一个即可
>
> ##### 2. 具体配置
>
> 以 `babel.config.js` 配置文件为例：
>
> ```javascript
> module.exports = {
>   // 预设
>   presets: [],
> };
> ```
>
> 1. presets 预设
>
> 简单理解：就是一组 Babel 插件, 扩展 Babel 功能
>
> - `@babel/preset-env`: 一个智能预设，允许您使用最新的 JavaScript。
> - `@babel/preset-react`：一个用来编译 React jsx 语法的预设
> - `@babel/preset-typescript`：一个用来编译 TypeScript 语法的预设
>
> ##### 3. 在 Webpack 中使用
>
> 1. 下载包  npm i babel-loader @babel/core @babel/preset-env -D
> 2. 定义 Babel 配置文件 
>
> - babel.config.js
>
> ```javascript
> module.exports = {
>   presets: ["@babel/preset-env"],
> };
> ```
>
> 3. 配置 webpack.config.js
>
> ```js
> module.exports = {
>     module: {
>         rules: [
>           {
>             test: /\.js$/,
>             exclude: /node_modules/, // 排除node_modules代码不编译
>             loader: "babel-loader",
>           },
>         ]
>     }
> }
> ```
>
> 4. 运行指令 npx webpack

### 处理html资源

> 1. 下载包 npm i html-webpack-plugin -D
> 2. 配置 webpack.config.js
>
> ```js
> const HtmlWebpackPlugin = require("html-webpack-plugin");
> module.exports = {
>       plugins: [
>         new HtmlWebpackPlugin({
>           // 以 public/index.html 为模板创建文件
>           // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
>           template: path.resolve(__dirname, "public/index.html"),
>         }),
>       ],
> }
> ```
>
> 3. 修改index.html 去掉引入的 js 文件，因为 HtmlWebpackPlugin 会自动引入
> 4. npx webpack 看效果

### 开发服务器&自动化

> 每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化
>
> 1. 下载包 **npm i webpack-dev-server -D**
> 2. 配置 webpack.config.js
>
> ```js
> module.exports = {
>     plugins: [
>           // 开发服务器
>           devServer: {
>             host: "localhost", // 启动服务器域名
>             port: "3000", // 启动服务器端口号
>             open: true, // 是否自动打开浏览器
>           },
>     ]
> }
> ```
>
> 3. 运行指令 npx webpack server
>
> **注意运行指令发生了变化**
>
> 并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。
>
> 开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我们并不需要知道。

### 生产模式

> 生产模式是开发完成代码后，我们需要得到代码将来部署上线。
>
> 这个模式下我们主要对代码进行优化，让其运行性能更好。
>
> 优化主要从两个角度出发:
>
> 1. 优化代码运行性能
> 2. 优化代码打包速度
>
> 我们要分别准备两个配置文件来放不同的配置
>
> 1. 文件目录
>
> ```js
> ├── webpack-test (项目根目录)
>     ├── config (Webpack配置文件目录)
>     │    ├── webpack.dev.js(开发模式配置文件)
>     │    └── webpack.prod.js(生产模式配置文件)
>     ├── node_modules (下载包存放目录)
>     ├── src (项目源码目录，除了html其他都在src里面)
>     │    └── 略
>     ├── public (项目html文件)
>     │    └── index.html
>     ├── .eslintrc.js(Eslint配置文件)
>     ├── babel.config.js(Babel配置文件)
>     └── package.json (包的依赖管理配置文件)
> ```
>
> 2. 修改 webpack.dev.js 
>
> 因为文件目录变了，所以所有`绝对路径`需要回退一层目录才能找到对应的文件
>
> 运行开发模式指令：npx webpack serve --config ./config/webpack.dev.js
>
> 3. 修改 webpack.prod.js
>
> 主要是绝对路径、去掉服务器自动化和mode设为 production
>
> 运行生产模式的指令：npx webpack --config ./config/webpack.prod.js
>
> 4. 配置运行指令
>
> 为了方便运行不同模式的指令，我们将指令定义在 package.json 中 scripts 里面
>
> ```json
> // package.json
> {
>   // 其他省略
>   "scripts": {
>     "start": "npm run dev",
>     "dev": "npx webpack serve --config ./config/webpack.dev.js",
>     "build": "npx webpack --config ./config/webpack.prod.js"
>   }
> }
> ```
>
> 以后启动指令：
>
> - 开发模式：`npm start` 或 `npm run dev`
> - 生产模式：`npm run build`

### css 处理

#### css提取成单独文件

> Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式
>
> 这样对于网站来说，会出现闪屏现象，用户体验不好（f12，network设为 slow 3G，会有复现）
>
> 我们应该是单独的 Css 文件，通过 link 标签加载性能才好
>
> 1. 下载包 npm i mini-css-extract-plugin -D
> 2. 配置 webpack.pros.js
>
> ```js
> const MiniCssExtractPlugin = require("mini-css-extract-plugin");
> module.exports  = {
>     module: {
>         rules: [
>           {
>             // 用来匹配 .css 结尾的文件
>             test: /\.css$/,
>             // use 数组里面 Loader 执行顺序是从右到左
>             use: [MiniCssExtractPlugin.loader, "css-loader"],
>           },
>         ]
>     }
>     plugins: {
>         // 提取css成单独文件
>         new MiniCssExtractPlugin({
>           // 定义输出文件名和目录
>           filename: "static/css/main.css",
>         }),
>     }
> }
> ```
>
> 3. 运行指令 npm run build

#### css兼容

> 1. 下载包 npm i postcss-loader postcss postcss-preset-env -D
> 2. 。。。省略

#### css压缩

> 1. 下载包 npm i css-minimizer-webpack-plugin -D
> 2. 配置。。。省略

### html压缩

> 默认生产模式已经开启了：html 压缩和 js 压缩
>
> 不需要额外进行配置

### 有哪些常⻅的**Loader**？ 

> - file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件 
> - url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去 
> - ps:过去在 Webpack4 时，我们处理图片资源通过 `file-loader` 和 `url-loader` 进行处理,现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源
>
> ```JS
>       {
>         test: /\.(png|jpe?g|gif|webp)$/,
>         type: "asset",
>       },
> ```
>
> - source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试 ，知道错误的行or列。
> - image-loader：加载并且压缩图⽚⽂件 
> - html-loder：将 HTML 导出为字符串。当编译器需要时，将压缩 HTML 字符串。
> - babel-loader：把 ES6 转换成 ES5 
> - css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性 
> - style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。 
> - eslint-loader：通过 ESLint 检查 JavaScript 代码 
> - thread-loder：使用多线程
>
> `注意`：在Webpack中，loader的执行顺序是**从右向左**执行的。因为webpack选择了**compose这样的函数式编程方式**，这种方式的表达式执行是从右向左的。

### 有哪些常见的**Plugin**？ 

> - html-webpack-plugin：简化html⽂件创建，对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用
> - define-plugin：定义环境变量 
> - eslint-webpack-plugin：使用 [`eslint`](https://eslint.org/) 来查找和修复 JavaScript 代码中的问题。
> - terser-webpack-plugin：该插件使用 [terser](https://github.com/terser/terser) 来压缩 JavaScript。
> - mini-css-extract-plugin: CSS提取到单独的⽂件中，⽀持按需加载 ，异步加载，解决闪屏问题，无重复编译
> - uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码 - 不再维护

### **bundle**，**chunk**，**module**是什么？

> - bundle：是由webpack打包出来的⽂件； 
> - chunk：代码块，⼀个chunk由多个模块组合⽽成，⽤于代码的合并和分割；
> - module：是开发中的单个模块，在webpack的世界，⼀切皆模块，⼀个模块对应⼀个⽂件，webpack会从配置的 entry中递归开始找出所有依赖的模块。

### **Loader**和**Plugin**的不同？ 

> **不同的作用**: 
>
> - **Loader**直译为"加载器"。Webpack将⼀切文件视为模块，但是webpack原生是只能解析js、json⽂件，如果想将其他⽂件也打包的话，就会⽤到 loader 。 所以Loader的作⽤是让webpack拥有了加载和解析⾮JavaScript⽂件的`能⼒`。 
> - **Plugin**直译为"插件"。Plugin可以扩展webpack的`功能`，让webpack具有更多的灵活性。 在 Webpack 运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
>
> **不同的用法**:
>
> - **Loader**在 module.rules 中配置，也就是说他作为模块的解析规则⽽存在。 类型为数组，每⼀项都是⼀个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ） 
>- **Plugin**在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。

### **webpack**的构建流程**?** 

> Webpack 的运⾏流程是⼀个串⾏的过程，从启动到结束会依次执⾏以下流程： 
>
> 1. `初始化参数`：从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数； 
> 2. `开始编译`：⽤上⼀步得到的参数初始化 Compiler（编译器） 对象，加载所有配置的插件，执⾏对象的 run ⽅法开始执⾏编译； 
> 3. `确定⼊⼝`：根据配置中的 entry 找出所有的⼊⼝⽂件； 
> 4. `编译模块`：从⼊⼝⽂件出发，调⽤所有配置的 Loader 对模块进⾏翻译，再找出该模块依赖的模块，再递归本步骤直到所有⼊⼝依赖的⽂件都经过了本步骤的处理； 
> 5. `完成模块编译`：在经过第4步使⽤ Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系； 
> 6. `输出资源`：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 Chunk，再把每个 Chunk 转换成⼀个单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会； 
> 7. `输出完成`：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容写⼊到⽂件系统。
>
> 
>
> 在以上过程中，Webpack 会在特定的时间点⼴播出特定的事件，`插件`在监听到感兴趣的事件后会执⾏特定的逻辑，并且插件可以调⽤ Webpack 提供的 API 改变 Webpack 的运⾏结果。 

### **webpack** 热更新的实现原理？ 

> webpack的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块。 

### Webpack 优化- 四个角度

> ### 总结
>
> 我们从 4 个角度对 webpack 和代码进行了优化：
>
> ##### 1. 提升开发体验
>
> - 使用 `Source Map`(源代码映射) 让开发或上线时代码报错能有更加准确的错误提示。
>
> ##### 2. 提升 webpack 打包构建速度
>
> - 使用 `HotModuleReplacement`（HMR/热模块替换）： 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。生产模式不可用，可以用reacht-hot-loader解决
> - 使用 `OneOf` ：让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。
> - 使用 `Include/Exclude` 排除或只检测某些文件，处理的文件更少，速度更快。只能写一个。
> - 使用 `Cache`：开启babel-loader的cacheDirectory， ESLintWebpackPlugin的缓存目录cacheLocation，对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。
> - 使用 `thread-loader`：多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，每个进程启动通信都有开销-600ms，要在比较多代码处理时使用才有效果）。
>
> ps:Happypack也可以，配置比较麻烦
>
> ##### 3. 减少代码体积
>
> - 使用 `Tree Shaking` 剔除了没有使用的多余代码，让代码体积更小。
> - 使用 `@babel/plugin-transform-runtime` 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。
> - 使用 `Image Minimizer` （image-minimizer-webpack-plugin），对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）
>
> ##### 4. 优化代码运行性能
>
> - 使用 `Code Split` 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
> - 使用 `Preload / Prefetch` 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。
> - 使用 `Network Cache` 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。
> - 使用 `Core-js` 对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。
>
> > ps：`core-js` 是专门用来做 ES6 以及以上 API 的 `polyfill`。
> >
> > `polyfill`翻译过来叫做垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。
>
> - 使用 `PWA（渐进式网络应用程序）` 能让代码离线也能访问，从而提升用户体验。

### 如何用webpack来优化前端性能

> ⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。 
>
> * **压缩代码**：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的terser-webpack-plugin,@babel/plugin-transform-runtime 实现js压缩、css-minimizer-webpack-plugin压缩css，image-minimizer-webpack-plugin压缩图片
> * **利⽤CDN加速**: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径 
> * **Tree Shaking**: 将代码中永远不会⾛到的⽚段删除掉。默认开启。
> * **Code Splitting:** 将代码按路由维度或者组件分块(chunk),这样做到按需加载，动态导入,同时可以充分利⽤浏览器缓存 
> * **提取公共第三⽅库**: SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码 
> * **PWA(渐进式网络应用程序)**：**离线(offline)** 时应用程序能够继续运行功能。通过service workers实现，

### 提升开发体验

#### source map

> #### 为什么
>
> 开发时我们运行的代码是经过 webpack 编译后，所有 css 和 js 合并成了一个文件，并且多了其他代码。此时如果代码运行出错那么提示代码错误位置我们是看不懂的。一旦将来开发代码文件很多，那么很难去发现错误出现在哪里。
>
> 所以我们需要更加准确的错误提示，来帮助我们更好的开发代码
>
> #### 是什么
>
> SourceMap（源代码映射）是一个用来生成源代码与构建后代码一一映射的文件的方案。
>
> 它会生成一个 xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后代码出错了，会通过 xxx.map 文件，从构建后代码出错位置找到映射后源代码出错位置，从而让浏览器提示源代码文件出错位置，帮助我们更快的找到错误根源。
>
> ### 怎么用
>
> SourceMap 的值有很多种情况，但实际开发时我们只需要关注两种情况即可：
>
> - 开发模式：`cheap-module-source-map`
>   - 优点：打包编译速度快，只包含行映射
>   - 缺点：没有列映射
> - 生产模式：`source-map`
>   - 优点：包含行/列映射
>   - 缺点：打包编译速度更慢
>
> ```js
> module.exports = {
>     // 其他省略
>     mode: "development",
>     devtool: "cheap-module-source-map", // 开发模式
> 	// devtool: "source-map", // 生产模式
> };
> ```

### 提升打包构建速度

#### HotModuleReplacement

> #### 为什么
>
> 开发时我们修改了其中一个模块代码，Webpack 默认会将所有模块全部重新打包编译，速度很慢。
>
> 所以我们需要做到修改某个模块代码，就只有这个模块代码需要重新打包编译，其他模块不变，这样打包速度就能很快
>
> #### 是什么
>
> HotModuleReplacement（HMR/热模块替换）：在程序运行中，替换、添加或删除模块，而无需重新加载整个页面。
>
> #### 怎么用
>
> 1. 基本配置
>
> ```js
> module.exports = {
>   // 其他省略
>   devServer: {
>     host: "localhost", // 启动服务器域名
>     port: "3000", // 启动服务器端口号
>     open: true, // 是否自动打开浏览器
>     hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
>   },
> };
> ```
>
> 此时 css 样式经过 style-loader 处理，已经具备 HMR 功能了。 但是 js 还不行。
>
> 2. JS 配置
>
> main.js 入口
>
> ```js
> // 判断是否支持HMR功能
> if (module.hot) {
>   module.hot.accept("./js/count.js", function (count) {
>     const result1 = count(2, 1);
>     console.log(result1);
>   });
> 
>   module.hot.accept("./js/sum.js"); // 第二个参数，可写可不写
> }
> ```
>
> 上面这样写会很麻烦，所以实际开发我们会使用其他 loader 来解决。
>
> 比如：[vue-loaderopen in new window](https://github.com/vuejs/vue-loader), [react-hot-loaderopen in new window](https://github.com/gaearon/react-hot-loader)。
>
> 注意，生产模式是不可用的，因为生产模式打包就是重新打包。

#### oneOf

> #### 为什么
>
> 打包时每个文件都会经过所有 loader 处理，虽然因为 `test` 正则原因实际没有处理上，但是都要过一遍。比较慢。
>
> #### 是什么
>
> 顾名思义就是只能匹配上一个 loader, 剩下的就不匹配了。
>
> #### 怎么用
>
> 开发和生产配置相同
>
> ```js
> module.exports = {
>     module: {
>         rules: [
>             {
>                 // 用 oneOf 包裹
>                 oneOf: [
>                     
>                 ]
>             }
>         ]
>     }
> }
> ```

#### include/exclude

> #### 为什么
>
> 开发时我们需要使用第三方的库或插件，所有文件都下载到 node_modules 中了。而这些文件是不需要编译可以直接使用的。
>
> 所以我们在对 js 文件处理时，要排除 node_modules 下面的文件。
>
> #### 是什么
>
> - include
>
> 包含，只处理 xxx 文件
>
> - exclude
>
> 排除，除了 xxx 文件以外其他文件都处理
>
> ps：这两个配置只能写一个，要么 include，要么 exclude，一般只针对js文件做处理，即babel && ESLint
>
> #### 怎么用
>
> 开发和生产一样配置
>
> ```js
> // module  
> {
>     test: /\.js$/,
>     // exclude: /node_modules/, // 排除node_modules代码不编译
>     include: path.resolve(__dirname, "../src"), // 也可以用包含
>     loader: "babel-loader",
>   },
>       
> // plugins
> new ESLintWebpackPlugin({
>     // 指定检查文件的根目录
>     context: path.resolve(__dirname, "../src"),
>     exclude: "node_modules", // 默认值
> }),
>               
>               
> ```

#### Cache

> #### 为什么
>
> 每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。
>
> 我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了。
>
> 第一次没有缓存，仍然需要整体打包，所以不会提升。
>
> #### 是什么
>
> 对 Eslint 检查 和 Babel 编译结果进行缓存。
>
> #### 怎么用

#### thead

> #### 为什么
>
> 当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码。这个速度是比较慢的。
>
> 我们想要继续提升打包速度，其实就是要提升 js 的打包速度，因为其他文件都比较少。
>
> 而对 js 文件处理主要就是 eslint 、babel、Terser 三个工具，所以我们要提升它们的运行速度。
>
> 我们可以开启多进程同时处理 js 文件，这样速度就比之前的单进程打包更快了。
>
> #### 是什么
>
> 多进程打包：开启电脑的多个进程同时干一件事，速度更快。
>
> **需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。**
>
> #### 怎么用
>
> 我们启动进程的数量就是我们 CPU 的核数。
>
> 1. 如何获取 CPU 的核数，因为每个电脑都不一样。
>
> ```js
> // nodejs核心模块，直接使用
> const os = require("os");
> // cpu核数
> const threads = os.cpus().length;
> 
> ```
>
> 1. 下载包
> 2. 配置中使用
>
> 我们目前打包的内容都很少，所以因为启动进程开销原因，使用多进程打包实际上会显著的让我们打包时间变得很长。

### 减少代码体积

#### Tree shaking

> #### 为什么
>
> 开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。
>
> 如果没有特殊处理的话我们打包时会引入整个库，但是实际上可能我们可能只用上极小部分的功能。
>
> 这样将整个库都打包进来，体积就太大了。
>
> #### 是什么
>
> `Tree Shaking` 是一个术语，通常用于描述移除 JavaScript 中的没有使用上的代码。
>
> **注意：它依赖 `ES Module`。**
>
> #### 怎么用
>
> Webpack 已经默认开启了这个功能，无需其他配置

#### Babel

> ### 为什么
>
> Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！
>
> Babel 对一些公共方法使用了非常小的辅助代码，比如 `_extend`。默认情况下会被添加到每一个需要它的文件中。
>
> 你可以将这些辅助代码作为一个独立模块，来避免重复引入。
>
> ### 是什么
>
> `@babel/plugin-transform-runtime`: 禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引用。
>
> ### 怎么用

#### Image Minimizer

> #### 为什么
>
> 开发如果项目中引用了较多图片，那么图片体积会比较大，将来请求速度比较慢。
>
> 我们可以对图片进行压缩，减少图片体积。
>
> **注意：如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。**
>
> #### 是什么
>
> `image-minimizer-webpack-plugin`: 用来压缩图片的插件
>
> #### 怎么用
>
> 1. 下载包
> 2. 无损压缩 有损压缩

### 优化代码运行性能

#### Code Split

> #### 为什么
>
> 打包代码时会将所有 js 文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。
>
> 所以我们需要将打包生成的文件进行代码分割，生成多个 js 文件，渲染哪个页面就只加载某个 js 文件，这样加载的资源就少，速度就更快。
>
> #### 是什么
>
> 代码分割（Code Split）主要做了两件事：
>
> 1. 分割文件：将打包生成的文件进行分割，生成多个 js 文件。
> 2. 按需加载：需要哪个文件就加载哪个文件。
>
> #### 怎么用
>
> 代码分割实现方式有不同的方式，为了更加方便体现它们之间的差异，我们会分别创建新的文件来演示
>
> ##### 1. 多入口
>
>  dist 目录我们能看到输出了两个 js 文件。
>
> 总结：配置了几个入口，至少输出几个 js 文件。
>
> ##### 2. 提取重复代码
>
> 如果多入口文件中都引用了同一份代码，我们不希望这份代码被打包到两个文件中，导致代码重复，体积更大。
>
> 我们需要提取多入口的重复代码，只打包生成一个 js 文件，其他文件引用它就好。
>
> 会发现生成 3 个 js 文件，其中有一个就是提取的公共模块。
>
> ##### 3. 按需加载，动态导入
>
> 想要实现按需加载，动态导入模块。还需要额外配置import：
>
> import动态导入 --> 实现按需加载，会将动态导入的文件代码分割（拆分成单独模块），
>  在需要使用的时候自动加载
>  即使只被引用了一次，也会代码分割
>
> 我们可以发现，一旦通过 import 动态导入语法导入模块，模块就被代码分割，同时也能按需加载了。
>
> ##### 4. 单入口
>
> ##### 5. 更新配置
>
> 最终我们会使用单入口+代码分割+动态导入方式来进行配置。更新之前的配置文件。
>
> ##### 6. 给动态导入文件取名称

#### Preload / Prefetch

> #### 为什么
>
> 我们前面已经做了代码分割，同时会使用 import 动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。
>
> 但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。
>
> 我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上 `Preload` 或 `Prefetch` 技术。
>
> #### 是什么
>
> - `Preload`：告诉浏览器立即加载资源。
> - `Prefetch`：告诉浏览器在空闲时才开始加载资源。
>
> 它们共同点：
>
> - 都只会加载资源，并不执行。
> - 都有缓存。
>
> 它们区别：
>
> - `Preload`加载优先级高，`Prefetch`加载优先级低。
> - `Preload`只能加载当前页面需要使用的资源，`Prefetch`可以加载当前页面资源，也可以加载下一个页面需要使用的资源。
>
> 总结：
>
> - 当前页面优先级高的资源用 `Preload` 加载。
> - 下一个页面需要使用的资源用 `Prefetch` 加载。
>
> 它们的问题：兼容性较差。
>
> - 我们可以去 [Can I Useopen in new window](https://caniuse.com/) 网站查询 API 的兼容性问题。
> - `Preload` 相对于 `Prefetch` 兼容性好一点。
>
> #### 怎么用

#### Network Cache

> #### 为什么
>
> 将来开发时我们对静态资源会使用缓存来优化，这样浏览器第二次请求资源就能读取缓存了，速度很快。
>
> 但是这样的话就会有一个问题, 因为前后输出的文件名是一样的，都叫 main.js，一旦将来发布新版本，因为文件名没有变化导致浏览器会直接读取缓存，不会加载新资源，项目也就没法更新了。
>
> 所以我们从文件名入手，确保更新前后文件名不一样，这样就可以做缓存了。
>
> #### 是什么
>
> 它们都会生成一个唯一的 hash 值。
>
> - fullhash（webpack4 是 hash）
>
> 每次修改任何一个文件，所有文件名的 hash 至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。
>
> - chunkhash
>
> 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。我们 js 和 css 是同一个引入，会共享一个 hash 值。
>
> - contenthash
>
> 根据文件内容生成 hash 值，只有文件内容变化了，hash 值才会变化。所有文件 hash 值是独享且不同的。
>
> #### 怎么用
>
> - 问题：
>
> 当我们修改 math.js 文件再重新打包的时候，因为 contenthash 原因，math.js 文件 hash 值发生了变化（这是正常的）。
>
> 但是 main.js 文件的 hash 值也发生了变化，这会导致 main.js 的缓存失效。明明我们只修改 math.js, 为什么 main.js 也会变身变化呢？
>
> - 原因：
>   - 更新前：math.xxx.js, main.js 引用的 math.xxx.js
>   - 更新后：math.yyy.js, main.js 引用的 math.yyy.js, 文件名发生了变化，间接导致 main.js 也发生了变化
> - 解决：
>
> 将 hash 值单独保管在一个 runtime 文件中。
>
> 我们最终输出三个文件：main、math、runtime。当 math 文件发送变化，变化的是 math 和 runtime 文件，main 不变。
>
> runtime 文件只保存文件的 hash 值和它们与文件关系，整个文件体积就比较小，所以变化重新请求的代价也小。

#### core-js

> #### 为什么
>
> 过去我们使用 babel 对 js 代码进行了兼容性处理，其中使用@babel/preset-env 智能预设来处理兼容性问题。
>
> 它能将 ES6 的一些语法进行编译转换，比如箭头函数、点点点运算符等。但是如果是 async 函数、promise 对象、数组的一些方法（includes）等，它没办法处理。
>
> 所以此时我们 js 代码仍然存在兼容性问题，一旦遇到低版本浏览器会直接报错。所以我们想要将 js 兼容性问题彻底解决
>
> #### 是什么
>
> `core-js` 是专门用来做 ES6 以及以上 API 的 `polyfill`。
>
> `polyfill`翻译过来叫做垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。
>
> #### 怎么用
>
> 察打包输出的 js 文件，我们发现 Promise 语法并没有编译转换，所以我们需要使用 `core-js` 来进行 `polyfill`。

#### PWA

> #### 为什么
>
> 开发 Web App 项目，项目一旦处于网络离线情况，就没法访问了。
>
> 我们希望给项目提供离线体验。
>
> #### 是什么
>
> 渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。
>
> 其中最重要的是，在 **离线(offline)** 时应用程序能够继续运行功能。
>
> 内部通过 Service Workers 技术实现的。
>
> #### 怎么用