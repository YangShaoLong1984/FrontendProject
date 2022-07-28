let arr = [1, 2, [3, [4, [5, 6]]]]
console.log(arr);

// 方法1 flat
let arr1 = arr.flat(Infinity);
console.log(arr1);

// 方法2 reduce
function flatten1(arr) {
    return arr.reduce(function(pre, cur) {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
}
console.log(flatten1(arr));

// 方法3 解构 + some() - 只要有一个为true，整个some返回true
function flatten2(arr) {
    while (arr.some(ele => Array.isArray(ele))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten2(arr));

// 方法4 toString() + split() + map()
function flatten3(arr) {
    return arr.toString().split(',').map(ele => +ele);
}
console.log(flatten3(arr));
