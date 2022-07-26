/**
 * 参考：https://github.com/ccforward/cc/issues/44
 */

 function shuffle(arr) {
    let n = arr.length, random;
    while (0 != n) {
        random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
        console.log(random);
        [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
    }
    return arr;
}

// DEMO
console.log(shuffle([1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5]));