/**
 * 参考：https://github.com/ccforward/cc/issues/44
 */

/**
 * 方法1： Knuth Shuffle，时间复杂度o(n)
 * 每次从未处理的数组中随机取一个元素，然后把该元素放到数组的尾部，即数组的尾部放的就是已经处理过的元素
 * 1. 选取数组(长度n)中最后一个元素(arr[length-1])，将其与n个元素中的任意一个交换，此时最后一个元素已经确定
 * 2. 选取倒数第二个元素(arr[length-2])，将其与n-1个元素中的任意一个交换
 * 3. 重复第 1 2 步，直到剩下1个元素为止
 */
 function shuffle(arr) {
    let n = arr.length, random;
    while (0 != n) {
        random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整 <==> Math.floor()
        [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
    }
    return arr;
}

// DEMO
console.log(shuffle([1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5]));

/**
 * 方法2，sort 是对数组进行排序，每次从数组里面挑选两个数 进行运算。
 * 如果参数等于0，两个数位置不变
 * 如果参数小于0，就交换位置
 * 如果参数大于0，就不交换位置
 *  Math.random-0.5，这个运算的结果要么是大于0,要么是小于0.这样要么交换位置，要么不交换位置。
 * Math.random()：返回介于 0（包含） ~ 1（不包含） 之间的一个随机数
 */
function shuffle2(arr) {
    arr.sort(() => Math.random() - 0.5);
}

/**
 * 方法3，复杂度o(n方) 从原始数组中随机抽取一个新的元素到新数组中
 * 1. 从还没处理的数组（假如还剩n个）中，产生一个[0, n]之间的随机数 random
 * 2. 从剩下的n个元素中把第 random 个元素取出到新数组中
 * 3. 删除原数组第random个元素
 * 4. 重复第 2 3 步直到所有元素取完
 * 5. 最终返回一个新的打乱的数组
 */
function shuffle3(arr) {
    let res = [];
    while (arr.length) {
        let index = Math.floor(Math.random() * arr.length);
        res.push(arr[index]);
        arr.splice(index, 1); // 删除 下标index 元素
    }
    return res;
}