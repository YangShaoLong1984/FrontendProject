### 写在前面：

* 一定要注意把‘2’ 之类字符串转为数字

`split`方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

如果分割规则为('')，则返回数组的成员是原字符串的每一个字符。

```
'abc'.split('') // ["a", "b", "c"]
```

参考网址：

https://blog.51cto.com/u_15127561/4534957

https://labfiles.acmcoder.com/ojhtml/index.html#/?id=jsv8

https://blog.csdn.net/weixin_47640160/article/details/120068519?spm=1001.2014.3001.5502

https://blog.csdn.net/SpringRolls/article/details/116506148

### vscode中输入输出

```js
const read_line = require('readline-sync')
let input = read_line.question("") // 最原始数据
console.log(input);
```

### 赛码

```js
let input = read_line()  // 最原始数据
console.log(input)
```

### 牛客

JavaScript - v8 - 6.0.0

```js
let input = readline();
print(input);
```

### 输入多行

```js
const read_line = require('readline-sync')
let arr = read_line.question("").split(' ').map(Number)
let m = arr[1];
let lines = [];
while (m--) {
    let cur = read_line.question("").split(' ').map(Number);
    lines.push(cur)
}
console.log(arr);
console.log(lines);
--------------------------------
输入：
第一行：3 3
第二行：1 2 3
第三行：1 3 4
第四行：2 3 5
打印：  [ 3, 3 ]
	   [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 2, 3, 5 ] ]
```





### 单行输入

```js
let input = read_line()
```

### 单行输出

```js
console.log(result)
```

### 读取多行

```js
while((line = read_line()) != '')
    
    -----------
let line;
while (line = read_line()) {  		// 如果读到输入文件结尾，就不会再进入循环了
  solve(line);  					// 处理一组输入。如果一组输入有不止一行，那就在这里面再读几行。
}
```

### [读取一个（长）整数](https://labfiles.acmcoder.com/ojhtml/index.html#/?id=读取一个（长）整数)

> readInt()

### [读取一个浮点型](https://labfiles.acmcoder.com/ojhtml/index.html#/?id=读取一个浮点型)

> readDouble()







## Javascript V8 输入-赛码

> 牛客网的OJ系统`Javascript V8`引擎，采用`readline()`读取输入。为了方便，直接采用while循环，读取所有的输入。
>
> ### 单行
>
> ```js
> while(line=readline()){
>     var lines = line.split(' ');    //同一行多个参数采用空格分割
> }
> ```
>
> ### 多行
>
> ```js
> var lines = [];
> while (line = readline()) {   
>     lines.push(line);
> }
> ```
>
> 输入一个数字n，接着输入n行
>
> ```js
> let n = read_line();
> while (n--) {
>     let input = read_line()
>     ///
>     ...
> }
> ```
>
> 
>
> ## Javascript V8 输出
>
> 输出方面，可以采用`print()`方法或者`console.log()`方法进行。
>
> ### 单行
>
> 单行没什么可说的，就是直接撸结果。
>
> ```js
> //print(rusult);
> console.log(rusult);
> ```
>
> ```js
> ()
> ```
>
> 
>
> ### 多行
>
> 输出多行就比较坑了，试了好几种方法，提交代码后都提示输出为空，无论是循环还是其他。终于试出来如下：
>
> ```js
> lines = ["1","2"]
> print(main(lines).join("\n"));
> //结果为 1 2
> ```
>
> 
>
> 另外这里补充一句，`array.join(" ")`，也可以做到与结果做到一样，但是验证无法通过。所以一定要使用这种方法。
>
> # 总结
>
> 总结一下，基本上实用`Javascript V8`引擎刷题的结构如下：
>
> ```js
> function main(argument){
>     //do sth……
>     //
>     return array;
> }
> var lines = [];
> while (line = readline()) {   
>         lines.push(line);
> }
> print(main(lines).join("\n"));
> ```
>
> 
>
> 在`main()`中写入处理函数，根据要求返回值即可。

> 输入第一行是数字n，之后跟着n行数据。
>
> ```js
> let n = readInt();
> let arr = [];
> while (n--) {
> 	//
> }
> ```

> 不限制规模，可能要接收 **多组输入**。（每一组可能是一行或者多行）
>
> ```js
> let line;
> while (line = read_line()) {  		// 如果读到输入文件结尾，就不会再进入循环了
>   solve(line);  					// 处理一组输入。如果一组输入有不止一行，那就在这里面再读几行。
> }
> ```

