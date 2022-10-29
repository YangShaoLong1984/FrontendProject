> ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。

### ES5、ES6、ES2015有什么区别

> ES2015特指在2015年发布的新一代JS语言标准，ES6泛指下一代JS语言标准，包含ES2015、ES2016、ES2017、ES2018等。现阶段绝大部分场景下，ES2015默认等同ES6。ES5泛指上一代语言标准。ES2015可以理解为是ES5与ES6的时间分界线

### bable是什么，有什么作用

> `babel`是一个`ES6`转码器，可以将`ES6`转化为`ES5`，兼容不支持`ES6`的平台

### let、const、var的区别

> **（1）块级作用域：**块作用域由 `{ }`包括，let和const具有块级作用域，var不存在块级作用域。块级作用域解决了ES5中的两个问题：
>
> - 内层变量可能覆盖外层变量
> - 用来计数的循环变量泄露为全局变量
>
> **（2）变量提升：**var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。
>
> **（3）给全局添加属性：**浏览器的全局对象是window，Node的全局对象是global。var声明的变量是函数或者全局范围的变量，但是let和const不会。
>
> **（4）重复声明：**var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的变量。const和let不允许重复声明变量。
>
> **（5）暂时性死区：**在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为**暂时性死区**。使用var声明的变量不存在暂时性死区。
>
> **（6）初始值设置：**在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。
>
> **（7）指针指向：**let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。
>
> | **区别**           | **var** | **let** | **const** |
> | ------------------ | ------- | ------- | --------- |
> | 是否有块级作用域   | ×       | ✔️       | ✔️         |
> | 是否存在变量提升   | ✔️       | ×       | ×         |
> | 是否添加全局属性   | ✔️       | ×       | ×         |
> | 能否重复声明变量   | ✔️       | ×       | ×         |
> | 是否存在暂时性死区 | ×       | ✔️       | ✔️         |
> | 是否必须设置初始值 | ×       | ×       | ✔️         |
> | 能否改变指针指向   | ✔️       | ✔️       | ×         |

### Symbol

> ES6中引入了一个新的基本数据类型Symbol，表示独一无二的值，属于 JavaScript 语言的原生数据类型之一。它是一种类似于字符串的数据类型，它的特点如下:
>
> * Symbol 值通过`Symbol()`函数生成，这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型，凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
> * Symbol的值是唯一的，用来解决命名冲突的问题
> * Symbol值不能与其他类型数据进行运算
> * Symbol定义的对象属性不能使用for...in遍历循环，但是可以使用Reflect.ownKeys来获取对象的所有键名
> * `Symbol()`函数前不能使用`new`命令，否则会报错，因为生成的 Symbol 是一个原始类型的值，不是对象
>
> ```js
> let s1 = Symbol('foo');
> let s2 = Symbol('foo');
> let s3 = Symbol();
> 
> console.log(s1); // Symbol(foo)
> console.log(typeof s1); // symbol
> console.log(s1 === s2); // false
> console.log(s3); // Symbol()
> ```
>
> > 上述代码，如果不加参数，它们在控制台的输出都是`Symbol()`，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
>
> #### 使用场景：
>
> * 常量值，避免常量值重复
> * 对象属性，避免对象属性覆盖
>
> > 基于以上特性，Symbol属性类型比较适合用于两类场景中:常量值和对象属性。
> >
> > **1 避免常量值重复**
> >
> > ```js
> > const KEY = {
> >     alibaba: 'A',
> >     baidu: 'B',
> >     tencent: 'B'
> > }
> > // 这样会出现问题，重复值导致相等
> > console.log(KEY.baidu === KEY.tencent);  // true
> > ```
> >
> > 所以在这种场景下更适合使用Symbol，`不需要关心值本身，只关心值的唯一性`:
> >
> > ```js
> > const KEY = {
> >     alibaba: Symbol(),
> >     baidu: Symbol(),
> >     tencent: Symbol()
> > }
> > console.log(KEY.baidu === KEY.tencent); // false
> > ```
> >
> > **2 避免对象属性覆盖**
> >
> > 如果往对象 KEY 添加一个临时属性，可能该对象参数中已经有这个属性了，如果直接赋值就会覆盖之前的值。
> >
> > ```js
> > const KEY = {
> >     alibaba: 'A',
> > }
> > KEY[alibaba] = 'B';
> > console.log(KEY); // 发生覆盖 { alibaba: 'B' }
> > ```
> >
> > 此时就可以使用Symbol来避免这个问题，如下，创建一个 Symbol 数据类型的变量，然后将该变量作为对象参数的属性进行赋值和读取，这样就能避免覆盖的情况：
> >
> > ```js
> > const KEY = {
> >     alibaba: 'A',
> > }
> > 
> > const s = Symbol();
> > KEY[s] = 'B';
> > console.log(KEY); // { alibaba: 'A', [Symbol()]: 'B' }
> > console.log(KEY[s]); // B
> > ```

### BigInt

> 引入原因：在JavaScript 中，数值类型Number是64位浮点数，所以计算精度和表示范围都有一定限制。ES2020新增了BigInt数据类型，这也是JavaScript引入的第八种基本类型。BigInt可以表示任意大的整数。
>
> 定义：**`BigInt`** 是一种内置对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。这原本是 Javascript 中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**`BigInt`** 可以表示任意大的整数。ps:JavaScript 中最小的安全整数 (`-(2^53 - 1)`).
>
> #### **定义方法**
>
> **可以用在一个整数字面量后面加 `n` 的方式定义一个 `BigInt`**
>
> **或者 BigInt(value);**  **value是创建对象的数值。可以是字符串或者整数。**
>
> 在JavaScript 中，Number基本类型可以精确表示的最大整数是23。因此早期会有这样的问题:
>
> ```js
> let max = Number.MAX_SAFE_INTEGER;    // 最大安全整数
> 
> let max1 = max + 1
> let max2 = max + 2
> 
> console.log(max1 === max2); // true，不相等的值却判定相等了
> ```
>
> * 有了Biglnt之后，这个问题就不复存在了:
>
> ```js
> let max = BigInt(Number.MAX_SAFE_INTEGER);
> 
> let max1 = max + 1n
> let max2 = max + 2n
> 
> max1 === max2   // false
> ```
>
> * 判断 BigInt 的类型：typeof 或者 Object.prototype.toString()
>
> ```js
> typeof 1n === 'bigint'; // true 
> typeof BigInt('1') === 'bigint'; // true 
> Object.prototype.toString.call(10n) === '[object BigInt]';    // true
> ```
>
> * 注意，BigInt 和 Number 不是严格相等的，但是宽松相等
>
> ```js
> 10n === 10 // false 
> 10n == 10  // true 
> ```
>
> * Number 和 BigInt 进行比较
>
> ```js
> 1n < 2;    // true 
> 2n > 1;    // true 
> 2 > 2;     // false 
> 2n > 2;    // false 
> 2n >= 2;   // true
> ```

### 可选链操作符 ?. 

> ES11(2020)
>
> 在开发过程中，我们经常需要获取深层次属性，例如a.b.c.name。但在获取 name这个属性前需要一步步的判断前面的属性是否存在，否则并会报错:
>
> ```js
> const a = {};
> const name = (a && a.b && a.b.c && a.b.c.name) || 'x';
> console.log(name); // x
> ```
>
> 为了简化上述过程，ES2020引入了「链判断运算符」 ?.
>
> **可选链操作符( ?.)**允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?.操作符的功能类似于．链式操作符，不同之处在于，在引用为null或undefined 的情况下不会引起错误，该表达式短路返回值是undefined。与函数调用一起使用时，如果给定的函数不存在，则返回undefined。
>
> ```js
> const a = {};
> const name = a?.b?.c?.name;
> console.log(name); // undefined
> ```
>
> 当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。
>
> 可选链有以下三种形式
>
> ```js
> a?.[x]
> // 等同于
> a == null ? undefined : a[x]
> 
> a?.b()
> // 等同于
> a == null ? undefined : a.b()
> 
> a?.()
> // 等同于
> a == null ? undefined : a()
> ```
>
> 在使用TypeScript开发时，这个操作符可以解决很多问题

### 空值合并运算符 ??

> ES11(2020)
>
> 在编写代码时，如果某个属性不为null和undefined，那么就获取该属性，如果该属性为null或undefined，则取一个默认值:
>
> ```js
> const name = a ? a : 'default';
> // 可以通过 || 来简化
> const name = a || 'default';
> ```
>
> 但是 || 的写法存在一定的缺陷，**当 a 为 0 或false 的时候也会走到default的逻辑**。所以ES2020引入了??运算符。只有??左边为null 或undefined时才返回右边的值:
>
> ```js
> const dogName = false; 
> const name =  dogName ?? 'default';
> console.log(name); // false
> // 而如果用 || 的话，name的值就是 default 了
> ```
>
> 

### 箭头函数与普通函数的区别

> **（1）箭头函数比普通函数更加简洁**
>
> - 如果没有参数，就直接写一个空括号即可
> - 如果只有一个参数，可以省去参数的括号
> - 如果有多个参数，用逗号分割
> - 如果函数体的返回值只有一句，可以省略大括号
> - 如果函数体不需要返回值，且只有一句话，可以给这个语句前面加一个void关键字。最常见的就是调用一个函数：
>
> ```javascript
> let fn = () => void doesNotReturn();
> ```
>
> **（2）箭头函数没有自己的this**
>
> 箭头函数不会创建自己的this， 所以它没有自己的this，它只会在自己作用域的上一层继承this。所以箭头函数中this的指向在它在定义时已经确定了，之后不会改变。
>
> **（3）箭头函数继承来的this指向永远不会改变**
>
> ```javascript
> var id = 'GLOBAL';
> var obj = {
>   id: 'OBJ',
>   a: function(){
>     console.log(this.id);
>   },
>   b: () => {
>     console.log(this.id);
>   }
> };
> obj.a();    // 'OBJ'
> obj.b();    // 'GLOBAL'
> new obj.a()  // undefined
> new obj.b()  // Uncaught TypeError: obj.b is not a constructor
> ```
>
> 对象obj的方法b是使用箭头函数定义的，这个函数中的this就永远指向它定义时所处的全局执行环境中的this，即便这个函数是作为对象obj的方法调用，this依旧指向Window对象。需要注意，定义对象的大括号`{}`是无法形成一个单独的执行环境的，它依旧是处于全局执行环境中。
>
> **（4）call()、apply()、bind()等方法不能改变箭头函数中this的指向**
>
> ```javascript
> var id = 'Global';
> let fun1 = () => {
>     console.log(this.id)
> };
> fun1();                     // 'Global'
> fun1.call({id: 'Obj'});     // 'Global'
> fun1.apply({id: 'Obj'});    // 'Global'
> fun1.bind({id: 'Obj'})();   // 'Global'
> ```
>
> **（5）箭头函数不能作为构造函数使用**
>
> 构造函数在new的步骤在上面已经说过了，实际上第二步就是将函数中的this指向该对象。 但是由于箭头函数时没有自己的this的，且this指向外层的执行环境，且不能改变指向，所以不能当做构造函数使用。
>
> **（6）箭头函数没有自己的arguments**
>
> 箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是它外层函数的arguments值。
>
> **（7）箭头函数没有prototype**
>
> **（8）箭头函数不能用作Generator函数，不能使用yeild关键字**

### const对象的属性可以修改吗

> * const保证的并不是`变量的值`不能改动，而是`变量指向的那个内存地址`不能改动。
>  * 对于基本类型的数据（数值、字符串、布尔值）来说，变量指向的那个内存地址保存的就是 值，因此等同于常量。
>   * 对于引用类型的数据（主要是对象和数组）来说，变量指向数据的那个内存地址保存的只是 一个指针，const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。
>
> ps:引用数据类型引用数据类型存储在堆，但它在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### 如果new一个箭头函数的会怎么样

> 箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。
>
> new操作符的实现步骤如下：
>
> （1）首先创建了一个新的空对象，作为将要返回的实例														
>
> （2）设置原型，将这个空对象的原型指向构造函数的 prototype 属性。
>
> （3）将这个空对象赋值给构造函数内部的this关键字，执行构造函数的代码.（为这个新对象添加属性和方法）
>
> （4）判断函数的返回值`result`类型，如果返回结果是对象，就直接返回，否则返回newObject对象

### 箭头函数的**this**指向哪⾥？

> 它没有自己的`this`对象，内部的`this`就是定义时上层作用域中的`this`。也就是说，箭头函数内部的`this`指向是固定的，相比之下，普通函数的`this`指向是可变的。
>
> 箭头函数不会创建自己的this， 所以它没有自己的this，它只会在自己作用域的上一层继承this。所以箭头函数中this的指向在它在定义时已经确定了，之后不会改变。

### 数组篇

### 扩展运算符的作用及使用场景

#### **1）对象扩展运算符**

> `对象的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。`
>
> ```js
> let bar = { a: 1, b: 2 };
> let baz = { ...bar }; // { a: 1, b: 2 }
> ```
>
> 上述方法实际上等价于:
>
> ```js
> let bar = { a: 1, b: 2 };
> let baz = Object.assign({}, bar); // { a: 1, b: 2 }
> ```
>
> `Object.assign`方法用于对象的合并，将源对象`（source）`的所有可枚举属性，复制到目标对象`（target）`。`Object.assign`方法的第一个参数是目标对象，后面的参数都是源对象。(**如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性**)。
>
> 同样，如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
>
> ```js
> let bar = {a: 1, b: 2};
> let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
> ```
>
> 利用上述特性就可以很方便的修改对象的部分属性。在`redux`中的`reducer`函数规定必须是**一个纯函数**，`reducer`中的`state`对象要求不能直接修改，可以通过扩展运算符把修改路径的对象都复制一遍，然后产生一个新的对象返回。
>
> 需要注意：**扩展运算符对**对象实例的拷贝属于`浅拷贝`。

#### **2）数组扩展运算符**及应用

> `数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。`
>
> 可以看做是 rest 参数的逆运算   如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
>
> ```js
> console.log(...[1, 2, 3])
> // 1 2 3
> console.log(...[1, [2, 3, 4], 5])
> // 1 [2, 3, 4] 5
> const [first, ...middle, last] = [1, 2, 3, 4, 5];
> // 报错
> ```
>
> 下面是数组的扩展运算符的应用：
>
> > **将数组转换为参数序列**
> >
> > **复制数组**
> >
> > **合并数组**
> >
> > **扩展运算符与解构赋值结合起来，用于生成数组**
> >
> > **将字符串转为真正的数组**  
> >
> > **任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组**
> >
> > **使用**`Math`**函数获取数组中特定的值**，最大值，最小值
>
> - **将数组转换为参数序列**
>
> ```js
> function add(x, y) {
>   return x + y;
> }
> const numbers = [1, 2];
> add(...numbers) // 3
> ```
>
> - **复制数组**
>
> ```js
> const arr1 = [1, 2];
> const arr2 = [...arr1];
> ```
>
> 要记住：**扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中**，这里参数对象是个数组，数组里面的所有对象都是基础数据类型，将所有基础数据类型重新拷贝到新的数组中。
>
> - **合并数组**
>
> 如果想在数组内合并数组，可以这样：
>
> ```js
> const arr1 = ['two', 'three'];
> const arr2 = ['one', ...arr1, 'four', 'five'];
> // ["one", "two", "three", "four", "five"]
> ```
>
> - **扩展运算符与解构赋值结合起来，用于生成数组**
>
> ```js
> const [first, ...rest] = [1, 2, 3, 4, 5];
> first // 1
> rest  // [2, 3, 4, 5]
> ```
>
> 需要注意：**如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。**
>
> ```js
> const [...rest, last] = [1, 2, 3, 4, 5];         // 报错
> const [first, ...rest, last] = [1, 2, 3, 4, 5];  // 报错
> ```
>
> - **将字符串转为真正的数组**
>
> ```js
> [...'hello']    // [ "h", "e", "l", "l", "o" ]
> ```
>
> - **任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组**
>
> 比较常见的应用是可以将某些数据结构转为数组：
>
> ```js
> // arguments对象
> function foo() {
>   const args = [...arguments];
> }
> ```
>
> 用于替换`es5`中的`Array.prototype.slice.call(arguments)`写法。
>
> - **使用**`Math`**函数获取数组中特定的值**，最大值，最小值  -- 替代 apply 方法调用函数
>
> ```js
> const numbers = [9, 4, 7, 1];
> Math.min(...numbers); // 1
> Math.max(...numbers); // 9
> ```

### 对对象与数组的解构的理解

> 解构是 ES6 提供的一种新的提取数据的模式，这种模式能够从对象或数组里有针对性地拿到想要的数值。
>
> **1）数组的解构**
>
> `在解构数组时，以元素的位置为匹配条件来提取想要的数据的`：
>
> ```js
> const [a, b, c] = [1, 2, 3]
> // a:1 b:2 c:3
> ```
>
> 最终，a、b、c分别被赋予了数组第0、1、2个索引位的值：1,2,3.数组里的0、1、2索引位的元素值，精准地被映射到了左侧的第0、1、2个变量里去，这就是数组解构的工作模式。
>
> 还可以通过给左侧变量数组设置空占位的方式，实现对数组中某几个元素的精准提取：
>
> ```js
> const [a,,c] = [1,2,3]
> // a:1    c:3
> ```
>
> **2）对象的解构**
>
> 对象解构比数组结构稍微复杂一些，也更显强大。`在解构对象时，是以属性的名称为匹配条件，来提取想要的数据的`。现在定义一个对象：
>
> ```js
> const stu = {
>       name: 'Bob',
>       age: 24
> }
> ```
>
> 假如想要解构它的两个自有属性，可以这样：
>
> ```js
> const { name, age } = stu
> // 这样就得到了 name 和 age 两个和 stu 平级的变量：
> // 注意，对象解构严格以属性名作为定位依据，所以就算调换了 name 和 age 的位置，结果也是一样的：
> // name:'Bob'   age:24
> ```

### 举一些`ES6`对`Array`数组类型做的常用升级优化

> - **优化部分**
>
> `ES6`可以使用**数组解构赋值**，在声明较多变量时，不用再写很多`let`，而且映射关系更加清楚，支持默认值
>
> **扩展运算符**，可以轻松方便的实现数组的复制和结构赋值。
>
> - **升级部分**
>
> 新增了`find`方法，用于取代传统的`indexOf`,此外还新增了`copyWithin()`, `includes()`, `fill()`,`flat()`等方法，可方便的用于字符串的查找、补全、转换等。
>
> 静态方法：Arra.from()  Array.of()  
>
> 实例方法：copyWithin() find()  findIndex()  fill() entries() keys() values()  includes()  flat() faltMap() at()

> ## Array.from() [§](https://es6.ruanyifeng.com/#docs/array#Array-from) [⇧](https://es6.ruanyifeng.com/#docs/array)
>
> `Array.from`方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
>
> 实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的`arguments`对象。`Array.from`都可以将它们转为真正的数组。
>
> ```js
> // NodeList对象
> let ps = document.querySelectorAll('p');
> Array.from(ps).filter(p => {       // 转为真正的数组，再使用filter方法。
>       return p.textContent.length > 100;
> });
> 
> // arguments对象
> function foo() {
>       var args = Array.from(arguments);
>       // ...
> }
> 
> ```
>
> 只要是部署了 Iterator 接口的数据结构，`Array.from`都能将其转为数组。
>
> ```js
> Array.from('hello')
> // ['h', 'e', 'l', 'l', 'o']
> 
> let namesSet = new Set(['a', 'b'])
> Array.from(namesSet) // ['a', 'b']
> // 上面代码中，字符串和 Set 结构都具有 Iterator 接口，因此可以被Array.from转为真正的数组。
> ```
>
> `Array.from`还可以接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
>
> ```js
> Array.from(arrayLike, x => x * x);
> // 等同于
> Array.from(arrayLike).map(x => x * x);
> ```
>
> ## Array.of()  [⇧](https://es6.ruanyifeng.com/#docs/array)
>
> `Array.of()`方法用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数`Array()`的不足。因为参数个数的不同，会导致`Array()`的行为有差异。
>
> ```js
> Array.of(3, 11, 8) // [3,11,8]
> Array.of(3) // [3]
> Array.of(3).length // 1
> 
> Array() // []
> Array(3) // [, , ,]
> Array(3, 11, 8) // [3, 11, 8]
> // 只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数只有一个正整数时，实际上是指定数组的长度。	
> ```
>
> `Array.of()`方法可以用下面的代码模拟实现。
>
> ```js
> function ArrayOf(){
>       return [].slice.call(arguments);
> }
> 
> ```
>
> ## copyWithin() [§](https://es6.ruanyifeng.com/#docs/array#实例方法：copyWithin) [⇧](https://es6.ruanyifeng.com/#docs/array)
>
> 数组实例的`copyWithin()`方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组.
>
> 它接受三个参数。
>
> target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
>
> start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
>
> end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算
>
> ```js
> [1, 2, 3, 4, 5].copyWithin(0, 3, 4)  // 读取的数据为4
> // [4, 2, 3, 4, 5]
> //将0（target）的位置替换成 arr[start]的数字
> ```
>
> ## find() 和 findIndex()
>
> 数组实例的`find`方法，用于找出`第一个`符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`的成员，然后返回该成员。如果没有符合条件的成员，则返回`undefined`。
>
> 找大于9的：find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
>
> ```js
> [1, 5, 10, 15].find(function(value, index, arr) {
>       return value > 9;
> }) // 10
> ```
>
> 数组实例的`findIndex`方法的用法与`find`方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`。
>
> ```js
> [1, 5, 10, 15].findIndex(function(value, index, arr) {
>       return value > 9;
> }) // 2
> ```
>
> 总结：另外，这两个方法都可以发现`NaN`，弥补了数组的`indexOf`方法的不足。
>
> `indexOf`方法无法识别数组的`NaN`成员，但是`findIndex`方法可以借助`Object.is`方法做到。
>
> ```js
> [NaN].indexOf(NaN)
> // -1
> 
> [NaN].findIndex(y => Object.is(NaN, y))
> // 0
> ```
>
> ## fill() [§](https://es6.ruanyifeng.com/#docs/array#实例方法：fill) [⇧](https://es6.ruanyifeng.com/#docs/array)
>
> `fill`方法使用给定值，填充一个数组。
>
> `fill`方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。（不包括第三个参数）
>
> ```js
> ['a', 'b', 'c'].fill(7, 1, 2)
> // ['a', 7, 'c']
> ```
>
> ## 实例方法：entries()，keys() 和 values()
>
> ES6 提供三个新的方法——`entries()`，`keys()`和`values()`——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历。
>
> ```js
> for (let index of ['a', 'b'].keys()) {
>       console.log(index);
> }
> // 0
> // 1
> 
> for (let elem of ['a', 'b'].values()) {
>       console.log(elem);
> }
> // 'a'
> // 'b'
> 
> for (let [index, elem] of ['a', 'b'].entries()) {
>       console.log(index, elem);
> }
> // 0 "a"
> // 1 "b"
> ```
>
> ## 实例方法：includes()
>
> `Array.prototype.includes`方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的`includes`方法类似。ES2016 引入了该方法。
>
> 该方法的第二个参数表示搜索的起始位置，默认为`0`。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为`-4`，但数组长度为`3`），则会重置为从`0`开始。
>
> ```js
> [1, 2, 3].includes(2)     // true
> [1, 2, 3].includes(4)     // false
> [1, 2, NaN].includes(NaN) // true
> ```
>
> includes与indexOf比较：
>
> `indexOf`方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于`-1`，表达起来不够直观。二是，它内部使用严格相等运算符（`===`）进行判断，这会导致对`NaN`的误判。
>
> `includes`使用的是不一样的判断算法，就没有这个问题。
>
> 另外，Map 和 Set 数据结构有一个`has`方法，需要注意与`includes`区分。
>
> - Map 结构的`has`方法，是用来查找键名的，比如`Map.prototype.has(key)`、`WeakMap.prototype.has(key)`、`Reflect.has(target, propertyKey)`。
> - Set 结构的`has`方法，是用来查找值的，比如`Set.prototype.has(value)`、`WeakSet.prototype.has(value)`。
>
> ## 实例方法：flat()，flatMap()
>
> 数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
>
> `flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为1。
>
> 如果不管有多少层嵌套，都要转成一维数组，可以用`Infinity`关键字作为参数。
>
> `flatMap()`方法对原数组的每个成员执行一个函数（相当于执行`Array.prototype.map()`），然后对返回值组成的数组执行`flat()`方法(只能展开一层)。该方法返回一个新数组，不改变原数组。
>
> `flatMap()`方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组。
>
> `flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`。
>
> ```js
> // 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
> [1, 2, 3, 4].flatMap(x => [[x * 2]])
> // [[2], [4], [6], [8]]
> ```
>
> 

> #### 对于数组空位的处理
>
> 数组的空位指的是，数组的某一个位置没有任何值。空位不是`undefined`，某一个位置的值等于`undefined`，依然是有值的。
>
> ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位：
>
> - `forEach()`, `filter()`, `reduce()`, `every()` 和`some()`都会跳过空位。
> - `map()`会跳过空位，但会保留这个值
> - `join()`和`toString()`会将空位视为`undefined`，而`undefined`和`null`会被处理成空字符串。
>
> ES6 则是明确将空位转为`undefined`：
>
> `Array.from()`方法会将数组的空位，转为`undefined`，也就是说，这个方法不会忽略空位。
>
> ```javascript
> Array.from(['a',,'b'])
> // [ "a", undefined, "b" ]
> ```
>
> 扩展运算符（`...`）也会将空位转为`undefined`。
>
> ```javascript
> [...['a',,'b']]
> // [ "a", undefined, "b" ]
> ```
>
> `copyWithin()`会连空位一起拷贝。
>
> ```javascript
> [,'a','b',,].copyWithin(2,0) // [,"a",,"a"]
> ```
>
> `fill()`会将空位视为正常的数组位置。
>
> ```javascript
> new Array(3).fill('a') // ["a","a","a"]
> ```
>
> `for...of`循环也会遍历空位。
>
> ```javascript
> let arr = [, ,];
> for (let i of arr) {
>   console.log(1);
> }
> // 1
> // 1
> ```
>
> 上面代码中，数组`arr`有两个空位，`for...of`并没有忽略它们。如果改成`map()`方法遍历，空位是会跳过的。
>
> `entries()`、`keys()`、`values()`、`find()`和`findIndex()`会将空位处理成`undefined`。
>
> ```javascript
> // entries()
> [...[,'a'].entries()] // [[0,undefined], [1,"a"]]
> 
> // keys()
> [...[,'a'].keys()] // [0,1]
> 
> // values()
> [...[,'a'].values()] // [undefined,"a"]
> 
> // find()
> [,'a'].find(x => true) // undefined
> 
> // findIndex()
> [,'a'].findIndex(x => true) // 0
> ```
>
> 由于空位的处理规则非常不统一，所以建议避免出现空位。

### 举一些`ES6`对`Number`数字类型做的常用升级优化

> - **优化部分**
>
> 新增了`isFinite()` `isNaN()`方法。`ES5`会造成`isNaN('NaN') === true`的奇怪行为。而`ES6`不会造成这种现象
>
> - **升级部分**
>
> `ES6`在`Math`对象上新增了`Math.cbrt()`，`trunc()`，`hypot()`等等较多的科学计数法运算方法，可以更加全面的进行立方根、求和立方根等等科学计算
>
> `Number.isFinite()`用来检查一个数值是否为有限的（finite），即不是`Infinity`。如果参数类型不是数值，`Number.isFinite`一律返回`false`。
>
> `Number.isNaN()`用来检查一个值是否为`NaN`。如果参数类型不是`NaN`，`Number.isNaN`一律返回`false`。
>
> #### BigInt（大整数）
>
> BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。为了与 Number 类型区别，BigInt 类型的数据必须添加后缀`n`。
>
> #### BigInt 函数
>
> JavaScript 原生提供`BigInt`函数，可以用它生成 BigInt 类型的数值。转换规则基本与`Number()`一致，将其他类型的值转为 BigInt。

### 举一些`ES6`对`Object`对象做的常用升级优化

> - **优化部分**
>
> 1. ES6 允许在大括号里面，直接写入变量和函数-简写，作为对象的属性和方法，比传统的键值对方式更加简洁更加方便（属性方法的简写）
> 2. 对象的**解构赋值**，在解构对象时，是以属性的名称为匹配条件，来提取想要的数据的。对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。
> 3. 对象的**扩展运算符**，对象的扩展运算符（`...`）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
> 4. super关键字，`ES6`在`class`新增了类似`this`的关键词`super`。同`this`指向当前函数所在的对象不同，`super`总是指向指向当前对象的原型对象。
>
> - **升级部分**
>
> 1. `ES6`在`Object`原型上新增了`is`方法，做两个目标对象的相等比较。用来完善`===方法`，`'==='方法中`NaN === NaN //false` 其实是不合理的，`Object.is`修复了这个小bug。Object.is()判断+0和-0为false。`不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身。
> 2. `ES6`在`Object`原型上新增了`assign()`方法，**用于对象新增属性、方法或者多个对象合并**。
> 3. `ES6`在`Object`原型上新增了`getOwnPropertyDescriptors()`方法，此方法增强了`ES5`中`getOwnPropertyDescriptor()`方法，可以获取指定对象所有自身属性的描述对象。结合`defineProperties()`方法，可以完美复制对象，包括复制`get`和`set`属性
> 4.  `ES6`在`Object`原型上新增了`getPrototypeOf()`和`setPrototypeOf()`方法，用来获取或设置当前对象的`prototype`对象。这个方法存在的意义在于，`ES5`中获取设置`prototype`对像是通过`__proto__`属性来实现的，然而`__proto__`属性并不是`ES`规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用，所以为了稳妥起见，获取或设置当前对象的`prototype`对象时，都应该采用`ES6`新增的标准用法。
> 5. `ES6`在`Object`原型上还新增了`Object.keys()`，`Object.values()`，`Object.entries()`方法，用来获取对象的所有键、所有值和所有键值对数组

### 举一些`ES6`对`Function`函数做的常用升级优化

> - **优化部分**
>
> 1. **箭头函数(核心)**。箭头函数是`ES6`核心的升级项之一，箭头函数里没有自己的`this`,这改变了以往JS函数中最让人难以理解的this运行机制
>
> - **箭头函数内的`this`指向的是函数定义时所在的对象，而不是函数执行时所在的对象**。`ES5`函数里的`this`总是指向函数执行时所在的对象，这使得在很多情况下`this`的指向变得很难理解，尤其是非严格模式情况下，`this`有时候会指向全局对象，这甚至也可以归结为语言层面的bug之一。`ES6`的箭头函数优化了这一点，它的内部没有自己的`this`,这也就导致了`this`总是指向上一层的`this`，如果上一层还是箭头函数，则继续向上指，直到指向到有自己`this`的函数为止，并作为自己的`this`
> - 箭头函数不能用作构造函数，因为它没有自己的`this`，无法实例化
> -  也是因为箭头函数没有自己的`this`,所以箭头函数 内也不存在`arguments`对象。（可以用扩展运算符代替）
>
> 1. **函数默认赋值**。`ES6`之前，函数的形参是无法给默认值得，只能在函数内部通过变通方法实现。ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
> 2. rest参数，见后面
>
> - **升级部分**
>
> 1. ES6新增了双冒号运算符，用来取代以往的`bind`，`call`,和`apply`。(浏览器暂不支持，`Babel`已经支持转码)

### 对 rest 参数的理解

> > rest参数用于获取函数的`多余参数`，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
> >
> > 下面是一个 rest 参数代替arguments变量的例子。
> >
> > ```js
> > // arguments变量的写法
> > function sortNumbers() {
> >     return Array.prototype.slice.call(arguments).sort();
> > }
> > 
> > // rest参数的写法
> > const sortNumbers = (...numbers) => numbers.sort();
> > ```
> >
> > 
> >
> > **rest参数和arguments对象的区别**
> >
> > - rest参数只包含那些没有对应形参的实参；而 arguments 对象包含了传给函数的所有实参。
> > - arguments 对象不是一个真实的数组；而rest参数是真实的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法。
> >
> > > ps:类数组的定义，有如下两条：
> > >
> > > - 具有：指向对象元素的数字索引下标以及 length 属性告诉我们对象的元素个数
> > > - 不具有：诸如 push 、 forEach 以及 indexOf 等数组对象具有的方法
> >
> > - arguments 对象还有一些附加的属性 (比如callee属性,它可以用于引用该函数的函数体内当前正在执行的函数,例如匿名函数内)。
> >
> > 另外，使用rest参数时应注意一下两点：
> >
> > - rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
> >
> > ```js
> > function f(a, ...b, c) { ... } // 报错
> > ```
> >
> > - 函数的length属性，不包括 rest 参数。
> >
> > ```js
> > (function(a) {}).length  // 1
> > (function(...a) {}).length  // 0
> > (function(a, ...b) {}).length  // 1
> > ```
> >
> > 
>
> > 扩展运算符被用在函数形参上时，**它还可以把一个分离的参数序列整合成一个数组**：
> >
> > ```js
> > function mutiple(...args) {
> >     let result = 1;
> >     for (var val of args) {
> >          result *= val;
> >     }
> >     return result;
> > }
> > mutiple(1, 2, 3, 4) // 24
> > ```
> >
> > 这里，传入 mutiple 的是四个分离的参数，但是如果在 mutiple 函数里尝试输出 args 的值，会发现它是一个数组：
> >
> > ```js
> > function mutiple(...args) {
> > console.log(args)
> > }
> > mutiple(1, 2, 3, 4) // [1, 2, 3, 4]
> > ```
> >
> > 这就是 … rest运算符的又一层威力了，它可以把函数的多个入参收敛进一个数组里。这一点**经常用于获取函数的多余参数，或者像上面这样处理函数参数个数不确定的情况。**
> >
> > Rest参数接收函数的多余参数，组成一个[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)，放在形参的最后，注意，rest参数之后不能再有其它参数（即，只能是最后一个参数），否则会报错。

> ### 什么是尾调用？
>
> 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
>
> ```javascript
> function f(x){
> ```

### Proxy 是什么，有什么作用

> `Proxy`是`ES6`新增的一个构造函数，可以理解为`JS`语言的一个代理，用来改变`JS`默认的一些语言行为，包括拦截默认的`get/set`等底层方法，使得`JS`的使用自由度更高，可以最大限度的满足开发者的需求
>
> `get`方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
>
> `set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

> #### 1、Proxy定义
>
> ```js
> let p = new Proxy(target, handler)
> ```
>
> Proxy 对象的所有用法，都是上面这种形式，不同的只是`handler`参数的写法
>
> `target` 表示所要拦截的目标对象
>
> `handler` 也是一个对象，用来定制拦截行为。比如可以用来自定义 `set` 或者 `get` 函数。

### `Reflect`是什么，有什么作用

> `Reflect`是`ES6`引入的一个新的对象，他的主要作用有两点，一是将原生的一些零散分布在`Object`、`Function`或者全局函数里的方法(如`apply`、`delete`、`get`、`set`等等)，统一整合到`Reflect`上，这样可以更加方便更加统一的管理一些原生API。其次就是因为`Proxy`可以改写默认的原生API，如果一旦原生API别改写可能就找不到了，所以`Reflect`也可以起到备份原生API的作用，使得即使原生API被改写了之后，也可以在被改写之后的API用上默认的API。

### 如何提取高度嵌套的对象里的指定属性？

> 有时会遇到一些嵌套程度非常深的对象：
>
> ```js
> const school = {
>        classes: {
>            stu: {
>                name: 'Bob',
>                age: 24,
>            }
>        }
> }
> ```
>
> 像此处的 name 这个变量，嵌套了四层，此时如果仍然尝试老方法来提取它：
>
> ```js
> const { name } = school
> ```
>
> 显然是不奏效的，因为 school 这个对象本身是没有 name 这个属性的，name 位于 school 对象的“儿子的儿子”对象里面。要想把 name 提取出来，一种比较笨的方法是逐层解构：
>
> ```js
> const { classes } = school
> const { stu } = classes
> const { name } = stu
> name // 'Bob'
> ```
>
> 但是还有一种更标准的做法，可以用一行代码来解决这个问题：
>
> ```js
> const { classes: { stu: { name } }} = school
>        
> console.log(name)  // 'Bob'
> ```
>
> 可以在解构出来的变量名右侧，通过冒号+{目标属性名}这种形式，进一步解构它，一直解构到拿到目标数据为止。

### ES6中模板语法与字符串处理

> ES6 提出了“模板语法”的概念。模板字面量 是允许嵌入表达式的字符串字面量。
>
> `反引号()`
>
> 在 ES6 以前，拼接字符串是很麻烦的事情：
>
> ```js
> var name = 'css'   
> var career = 'coder' 
> var hobby = ['coding', 'writing']
> var finalString = 'my name is ' + name + ', I work as a ' + career + ', I love ' + hobby[0] + ' and ' + hobby[1]
> ```
>
> 仅仅几个变量，写了这么多加号，还要时刻小心里面的空格和标点符号有没有跟错地方。但是有了模板字符串，拼接难度直线下降：
>
> ```js
> var name = 'css'   
> var career = 'coder' 
> var hobby = ['coding', 'writing']
> var finalString = `my name is ${name}, I work as a ${career} I love ${hobby[0]} and ${hobby[1]}`
> ```
>
> 字符串不仅更容易拼了，也更易读了，代码整体的质量都变高了。这就是模板字符串的第一个优势——允许用${}的方式嵌入变量。但这还不是问题的关键，模板字符串的关键优势有两个：
>
> - 在模板字符串中，空格、缩进、换行都会被保留
> - 模板字符串完全支持“运算”式的表达式，可以在${}里完成一些计算
>
> 基于第一点，可以在模板字符串里无障碍地直接写 html 代码：
>
> ```html
> let list = `
> 	<ul>
> 		<li>列表项1</li>
> 		<li>列表项2</li>
> 	</ul>
> `;
> console.log(message); // 正确输出，不存在报错
> ```
>
> 基于第二点，可以把一些简单的计算和调用丢进 ${} 来做：
>
> ```js
> function add(a, b) {
>   const finalString = `${a} + ${b} = ${a+b}`
>   console.log(finalString)
> }
> add(1, 2) // 输出 '1 + 2 = 3'
> ```
>
> 除了模板语法外， ES6中还新增了一系列的字符串方法用于提升开发效率：
>
> - **存在性判定**：在过去，当判断一个字符/字符串是否在某字符串中时，只能用 indexOf > -1 来做。现在 ES6 提供了三个方法：includes、startsWith、endsWith，它们都会返回一个布尔值来告诉你是否存在。
>
> - - **includes**：判断字符串与子串的包含关系：
>
>     ```js
>     const son = 'haha' 
>     const father = 'xixi haha hehe'
>     father.includes(son) // true
>     ```
>
>   - **startsWith**：判断字符串是否以某个/某串字符开头：
>
>     ```js
>     const father = 'xixi haha hehe'
>     father.startsWith('haha') // false
>     father.startsWith('xixi') // true
>     ```
>
>   - **endsWith**：判断字符串是否以某个/某串字符结尾：
>
>     ```js
>     const father = 'xixi haha hehe'
>     father.endsWith('hehe') // true
>     ```
>
> - **自动重复**：可以使用 repeat 方法来使同一个字符串输出多次（被连续复制多次）
>
>   ```js
>   const sourceCode = 'repeat for 3 times;'
>   const repeated = sourceCode.repeat(3) 
>   console.log(repeated) // repeat for 3 times;repeat for 3 times;repeat for 3 times;
>   ```

### ES6 声明变量的六种方法

> ES5 只有两种声明变量的方法：`var`命令和`function`命令。ES6 除了添加`let`和`const`命令，后面章节还会提到，另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有 `6 `种声明变量的方法。

### 顶层对象的属性 [§](https://es6.ruanyifeng.com/#docs/let#顶层对象的属性) [⇧](https://es6.ruanyifeng.com/#docs/let)

> ES5 之中，顶层对象的属性与全局变量是等价的。
>
> 顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一:
>
> * 首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道
> * 程序员很容易不知不觉地就创建了全局变量（比如打字出错）
> * 顶层对象的属性是到处可以读写的，这非常不利于模块化编程。
>
> es6的改变
>
> * `var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；
> * `let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。

### globalThis 对象

> JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。
>
> - 浏览器里面，顶层对象是`window`，但 Node 和 Web Worker 没有`window`。
> - 浏览器和 Web Worker 里面，`self`也指向顶层对象，但是 Node 没有`self`。
> - Node 里面，顶层对象是`global`，但其他环境都不支持。
>
> 现在有一个[提案](https://github.com/tc39/proposal-global)，在语言标准的层面，引入`globalThis`作为顶层对象。也就是说，任何环境下，`globalThis`都是存在的，都可以从它拿到顶层对象，指向全局环境下的`this`。

### 举一些`ES6`对`String`字符串类型做的常用升级优化

> - **优化部分**
>
> `ES6`新增了**模板字符串**，在拼接大段字符串，以反引号取代以前的相加方式，能保留所有空格和换行，模板字符串完全支持“运算”式的表达式，可以在${}里完成一些计算。字符串拼接看起来更加直接美观。
>
> - **升级部分**
>
> `ES6`在`String`原型上新增了`includes`方法，用于取代传统的`indexOf`方法。`includes`可直接返回`true`或者`false`，使语义更清晰，更加明确。此外还新增了`startsWith()`、`endWith()`、`padWidth()`、`padEnd()`、`repeat()`等方法，可方便的用于查找，补全字符串。

> - **includes()**：返回布尔值，表示是否找到了参数字符串。从第`n`个位置
>
> - **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。从第`n`个位置开始
>
> - **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。 这三个方法都支持第二个参数，表示开始搜索的位置。它针对前`n`个字符
>
> - `repeat`方法返回一个新字符串，表示将原字符串重复`n`次。小数取整，负数报错，NaN等于0
>
>   
>
>   字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
>
> - `padStart()`：用于头部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
>
> - `padEnd()`：用于尾部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
>
> - `trimStart()`消除字符串头部的空格，返回新字符串 2019
>
> - `trimEnd()`消除尾部的空格，返回新字符串 2019
>
> - `replaceAll()`方法，可以一次性替换所有匹配。 2020
>
> #### includes(),startWith(),endsWith()
>
> ```javascript
> let s = 'Hello world!';
> 
> s.startsWith('Hello') // true
> s.endsWith('!') // true
> s.includes('o') // true
> ```
>
> 这三个方法都支持第二个参数，表示开始搜索的位置。
>
> 下面代码表示，使用第二个参数`n`时，`endsWith`的行为与其他两个方法有所不同。它针对前`n`个字符，而其他两个方法针对从第`n`个位置直到字符串结束。
>
> ```javascript
> let s = 'Hello world!';
> 
> s.startsWith('world', 6) // true  第n个字符开始
> s.includes('Hello', 6) // false  第n个字符开始
> 
> s.endsWith('Hello', 5) // true   --- 针对前n个字符
> ```
>
> #### repeat()
>
> `repeat`方法返回一个新字符串，表示将原字符串重复`n`次。
>
> ```js
> 'x'.repeat(3) // "xxx"
> 'hello'.repeat(2) // "hellohello"
> 'na'.repeat(0) // ""
> ```
>
> padStart(), padEnd()
>
> ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。
>
> ```js
> 'x'.padStart(5, 'ab') // 'ababx'
> 'x'.padStart(4, 'ab') // 'abax'
> 
> 'x'.padEnd(5, 'ab') // 'xabab'
> 'x'.padEnd(4, 'ab') // 'xaba'
> ```
>
> 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
>
> ```js
> 'xxx'.padStart(2, 'ab') // 'xxx'
> 'xxx'.padEnd(2, 'ab') // 'xxx'
> ```
>
> 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
>
> ```js
> 'abc'.padStart(10, '0123456789')
> // '0123456abc'
> ```

### `Set`是什么，有什么作用

> `Set`是`ES6`引入的类似`Arrary`的一种新的数据结构，`Set`实例的成员都是唯一，不重复的。这个特性可以轻松地实现数组去重。`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
>
> 在 Set 内部，两个`NaN`是相等的。另外，两个对象总是不相等的。
>
> - `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
> - `Set.prototype.size`：返回`Set`实例的成员总数。
> - `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
> - `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
> - `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
> - `Set.prototype.clear()`：清除所有成员，没有返回值。
> - 遍历操作：
>   - `Set.prototype.keys()`：返回键名的遍历器
>   - `Set.prototype.values()`：返回键值的遍历器。ps:由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。
>   - `Set.prototype.entries()`：返回键值对的遍历器
>   - `Set.prototype.forEach()`：使用回调函数遍历每个成员
>
> `Array.from`方法可以将 Set 结构转为数组。扩展运算符也可以
>
> 利用Set给字符串，数组去重
>
> ```js
> // 去除数组的重复成员
> [...new Set(array)]   // 或者 Array.from(new Set(array));
> [...new Set('ababbc')].join('')
> // "abc"
> ```

### WeakSet

> WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
>
> * 首先，WeakSet 的成员`只能是对象`，而不能是其他类型的值。
> * WeakSet 中的`对象都是弱引用`，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
>
> WeakSet 结构有以下三个方法。
>
> * **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
> * **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
> * **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
>
> WeakSet 没有`size`属性，没有办法遍历它的成员。
>
> WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
>
> WeakSet 的一个用处，是`储存 DOM 节点`，而不用担心这些节点从文档移除时，会引发内存泄漏。

### `Map`是什么，有什么作用

> 问题：JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

> ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
>
> * `size`属性：返回 Map 结构的成员总数。
> * `Map.prototype.set(key, value)`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。
> * `Map.prototype.get(key)`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。
> * `Map.prototype.has(key)`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
> * `Map.prototype.delete(key)`方法删除某个键，返回`true`。如果删除失败，返回`false`。
> * `Map.prototype.clear()`方法清除所有成员，没有返回值。
>
> 遍历方法：
>
> * `Map.prototype.keys()`：返回键名的遍历器。
> * `Map.prototype.values()`：返回键值的遍历器。
> * `Map.prototype.entries()`：返回所有成员的遍历器。
> * `Map.prototype.forEach()`：遍历 Map 的所有成员。
>
> 需要特别注意的是，Map 的遍历顺序就是插入顺序。
>
> Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）。
>
> #### 与其他数据结构互换
>
> **（1）Map 转为数组**
>
> 使用扩展运算符（`...`）
>
> ```js
> const myMap = new Map()
>   .set(true, 7)
>   .set({foo: 3}, ['abc']);
> [...myMap]
> // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
> ```
>
> **（2）数组 转为 Map**
>
> 将数组传入 Map 构造函数，就可以转为 Map。
>
> ```js
> new Map([
>   [true, 7],
>   [{foo: 3}, ['abc']]
> ])
> // Map {
> //   true => 7,
> //   Object {foo: 3} => ['abc']
> // }
> ```
>
> **（3）Map 转为对象**
>
> 如果所有 Map 的键都是字符串，它可以无损地转为对象。如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
>
> ```js
> function strMapToObj(strMap) {
>   let obj = Object.create(null);
>   for (let [k,v] of strMap) {
>     obj[k] = v;
>   }
>   return obj;
> }
> 
> const myMap = new Map()
>   .set('yes', true)
>   .set('no', false);
> strMapToObj(myMap)
> // { yes: true, no: false }
> ```
>
> **（4）对象转为 Map**
>
> 对象转为 Map 可以通过`Object.entries()`。
>
> ```js
> let obj = {"a":1, "b":2};
> let map = new Map(Object.entries(obj));
> 
> //或者自己实现
> function objToStrMap(obj) {
>   let strMap = new Map();
>   for (let k of Object.keys(obj)) {
>     strMap.set(k, obj[k]);
>   }
>   return strMap;
> }
> 
> objToStrMap({yes: true, no: false})
> // Map {"yes" => true, "no" => false}
> ```
>
> **（5）Map 转为 JSON**
>
> **（6）JSON 转为 Map**

### WeakMap

> `WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合。`WeakMap`与`Map`的区别有两点。
>
> * 首先，`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。
> * 其次，`WeakMap`的键名所指向的对象，不计入垃圾回收机制。
>
> WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
>
> 也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。一个典型应用场景是，`在网页的 DOM 元素上添加数据，`就可以使用`WeakMap`结构。当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除。

### map和Object的区别

> |          | Map                                                          | Object                                                       |
> | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
> | 意外的键 | Map默认情况不包含任何键，只包含显式插入的键。可以用Map([[key, vlaue],[]])形式 | Object 有一个原型, 原型链上的键名有可能和自己在对象上的设置的键名产生冲突。 |
> | 键的类型 | Map的键可以是任意值，包括函数、对象或任意基本类型。          | Object 的键必须是 String 或是Symbol。                        |
> | 键的顺序 | Map 中的 key 是有序的。因此，当迭代的时候， Map 对象以插入的顺序返回键值。 | Object 的键是无序的                                          |
> | Size     | Map 的键值对个数可以轻易地通过size 属性获取                  | Object 的键值对个数只能手动计算                              |
> | 迭代     | Map 是 iterable 的，所以可以直接被迭代。for of               | 迭代Object需要以某种方式获取它的键然后才能迭代。for in       |

### 新增数据类型 Symbol

> ES6 引入`Symbol`的原因:ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。

> #### 一，是什么：
>
> `Symbol` 是 `ES6` 新推出的一种基本类型，它表示独一无二的值
>
> Symbol 值通过`Symbol()`函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
>
> 每个从`Symbol()`返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。
>
> 它可以选择接受一个字符串作为参数或者不传参数，但是相同参数的两个`Symbol `值不相等
>
> 可以通过`typeof`判断是否为`Symbol`类型
>
> `Symbol`不是一个完整的构造函数，不能通过`new Symbol()` 来创建
>
> ```js
> //不传参数
> const s1 = Symbol();
> const s2 = Symbol();
> console.log(s1 === s2); // false
> 
> // 传入参数
> const s3 = Symbol('debug');
> const s4 = Symbol('debug');
> console.log(s3 === s4); // false
> 
> ```
>
> 可以通过`typeof`判断是否为`Symbol`类型
>
> ```js
> console.log(typeof s1); // symbol
> ```
>
> 不是一个完整的构造函数，不能通过`new Symbol()` 来创建
>
> ```js
> const s1 = new Symbol();
> // Uncaught TypeError: Symbol is not a constructor
> ```
>
> #### 二、方法与属性
>
> `Symbol`有两个方法，如下：
>
> - Symbol.for()
> - Symbol.keyFor()
>
> ### Symbol.for()
>
> 用于将描述相同的`Symbol`变量指向同一个`Symbol`值
>
> ```js
> let a1 = Symbol.for('a');
> let a2 = Symbol.for('a');
> a1 === a2  // true
> typeof a1  // "symbol"
> typeof a2  // "symbol"
> 
> let a3= Symbol("a");
> a1 === a3      // false
> 复制代码
> ```
>
> 它跟`symbol()`的区别是`Symbol()`定义的值每次都是新建，即使描述相同值也不相等
>
> 而`Symbol.for()`定义的值会先检查给定的描述是否已经存在，如果不存在才会新建一个值，否则描述相同则他们就是同一个值
>
> ps:`Symbol.for()`与`Symbol()`这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
>
> ### Symbol.keyFor()
>
> `Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`。
>
> 注意：`Symbol.keyFor()`只能返回`Symbol.for()`在全局注册过的描述
>
> Symbol.keyFor()`是用来检测该字符串参数作为名称的 `Symbol `值是否已被登记，返回一个已登记的 `Symbol` 类型值的` key
>
> ```js
> let a1 = Symbol.for("a");
> Symbol.keyFor(a1);    // "a"
> 
> let a2 = Symbol("a");
> Symbol.keyFor(a2);    // undefined
> ```
>
> `Symbol`只有一个属性：
>
> - description
>
> ### description
>
> 用来返回`Symbol`数据的描述
>
> ```js
> // Symbol()定义的数据
> let a = Symbol("acc");
> a.description  // "acc"
> Symbol.keyFor(a);  // undefined
> 
> // Symbol.for()定义的数据
> let a1 = Symbol.for("acc");
> a1.description  // "acc"
> Symbol.keyFor(a1);  // "acc"
> 
> // 未指定描述的数据
> let a2 = Symbol();
> a2.description  // undefined
> 复制代码
> ```
>
> `description`能返回所有`Symbol`类型数据的描述，而`Symbol.keyFor()`只能返回`Symbol.for()`在全局注册过的描述
>
> ## 三、使用场景
>
> 借助`symbol`独一无二的特性，我们可将`symbol`应用在：
>
> - 对象添加属性
> - 作为私有属性
> - 消除魔术字符串
>
> ps：魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
>
> ### 对象添加属性
>
> 在对象上添加属性的时候，避免出现相同属性名，产生某一个属性被改写或覆盖的情况
>
> ```js
> let n = Symbol('N');
> let obj = {
>     name: "前端收割机",
>     age: 11,
>     [n]: 100
> }; 
> ```
>
> 使用`symbol`作为对象属性的时候，需要注意两点：
>
> - 需要通过方括号的形式访问`symbol`属性
>
> ```js
> const sym3 = Symbol('test');
> 
> const obj = {
>     [sym3]: 'foo'
> }
> 
> obj[sym3];       //"foo"
> ```
>
> - 迭代属性的时候，某些情况不能得到该`symbol`属性，如`for...in`、`for...of`....
>
> ### 私有属性
>
> `ES6` 中的类是没有 `private` 关键字来声明类的私有方法和私有变量的，我们可以利用 `Symbol `的唯一性来模拟
>
> ```js
> const speak = Symbol();
> class Person {
>     [speak]() {
>         console.log(123)
>     }
> }
> let person = new Person()
> console.log(person[speak]())
> ```
>
> 使用者无法在外部创建出一个相同的 `speak`，所以就无法调用该方法

### ES6模块化

> 历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。
>
> ES6中首次引入模块化开发规范ES Module，让Javascript首次支持原生模块化开发。ES Module把一个文件当作一个模块，每个模块有自己的独立作用域，那如何把每个模块联系起来呢?核心点就是模块的导入与导出。
>
> #### 1 export导出模块
>
> * **正常导出**
>
> ```js
> // 方式一
> export var first = 'test';
> export function func() {
>     return true;
> }
> 
> // 方式二
> var first = 'test';
> var second = 'test';
> function func() {
>     return true;
> }
> export {first, second, func};
> ```
>
> * **as关键字**
>
> ```js
> var first = 'test';
> export {first as second};
> ```
>
> as关键字可以重命名暴露出的变量或方法，经过重命名后同一变量可以多次暴露出去。
>
> * **export default**
>
> export default会导出默认输出，即用户不需要知道模块中输出的名字，在导入的时候为其指定任意名字。
>
> ```js
> // 导出
> export default function () {
>   console.log('foo');
> }
> // 导入
> import customName from './export-default';
> ```
>
> 注意:导入默认模块时**不需要大括号**，导出默认的**变量或方法可以有名字**，但是**对外无效**。export default**只能使用一次**。
>
> #### 2 import 导入模块
>
> * **正常导入**
>
> ```js
> import {firstName, lastName, year} from './profile';
> ```
>
> 导入模块位置可以是相对路径也可以是绝对路径，,js可以省略，如果不带路径只是模块名，则需要通过配置文件告诉引擎查找的位置。
>
> * **as关键字**
>
> ```js
> import { lastName as surname } from './profile';
> ```
>
> import命令会被提升到模块头部，所以写的位置不是那么重要，但是不能使用表达式和变量来进行导入。
>
> * **加载整个模块（无输出）**
>
> ```js
> import 'lodash'; //仅仅是加载而已，无法使用
> ```
>
> * **加载整个模块（有输出）**
>
> ```js
> import * as circle from './circle';
> console.log('圆面积：' + circle.area(4));
> console.log('圆周长：' + circle.circumference(14));
> ```
>
> 注意: import*会忽略default输出
>
> #### 3 导入导出复合用法
>
> * **先导入后导出**
>
> ```js
> export { foo, bar } from 'my_module';
> // 等同于
> import { foo, bar } from 'my_module';
> export { foo, boo};
> ```
>
> * **整体先导入再输出以及default**
>
> ```js
> // 整体输出
> export * from 'my_module';
> // 导出default，正如前面所说，export default 其实导出的是default变量
> export { default } from 'foo';
> // 具名接口改default
> export { es6 as default } from './someModule';
> ```
>
> #### 4 模块的继承
>
> ```js
> export * from 'circle';
> export var e = 2.71828182846;
> export default function(x) {
>   return Math.exp(x);
> }
> ```
>
> 上面代码中的`export *`，表示再输出`circle`模块的所有属性和方法。注意，`export *`命令会忽略`circle`模块的`default`方法。然后，上面代码又输出了自定义的`e`变量和默认方法。



### ES6模块与CommonJS模块有什么区别

> 在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。
>
> 1、`ES6 Module`和`CommonJS`模块的区别：
>
> - `CommonJS` 是对模块的浅拷贝，`ES6 Module` 是对模块的引用，即`ES6 Module`只存只读，不能改变其值，具体点就是指针指向不能变，类似 `const`
> - `import` 的接口是 `read-only`（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对 `commonJS` 对重新赋值（改变指针指向），但是对 `ES6 Module` 赋值会编译报错。
> - ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
>
> 2、`ES6 Module`和`CommonJS`模块的共同点：
>
> `CommonJS`和`ES6 Module`都可以对引入的对象进行赋值，即对对象内部属性的值进行改变。

### for...in 和for...of有什么区别

> 所有`Iterator`接口的对象(可遍历对象)都可以通过`for...of`去遍历，而`for..in`仅仅可以遍历对象。
>
> 这也就意味着，数组也可以用`for...of`遍历，这极大地方便了数组的取值，且避免了很多程序用for..in去遍历数组的恶习。
>
> 1. **`for...in` 循环出的是 `key` ，`for...of` 循环出的是 `value`**
> 2. `for...of` 是ES6新引入的特性
> 3. **`for...of` 不能循环没有 `[Symbol.iterator]` 属性的对象**，需要通过和 `Object.keys()` 搭配使用

### await 到底在等啥？

> `await` 表达式会暂停当前 `async function` 的执行，等待 `Promise` 处理完成。
>
> 若 `Promise` 正常处理(fulfilled)，其**构造函数第一个参数 `resolve` 函数的参数（`resolve(value)`）**作为 `await` 表达式的值，继续执行 `async function`。
>
> 若 `Promise` 处理异常(rejected)，`await` 表达式会把 `Promise` 的异常原因抛出。
>
> 另外，如果 `await` 操作符后的表达式的值不是一个 `Promise`，则返回该值本身。**`a = await 10` a就是10**

### Iterator

>  是一个可迭代接口，任何实现了此接口的数据结构都可以被 `for...of` 循环遍历