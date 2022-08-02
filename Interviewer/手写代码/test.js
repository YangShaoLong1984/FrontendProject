// 实现数组扁平化
function flatten1(arr) {
    return arr.reduce((pre, cur) => {
        return pre = pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
}

function flatten2(arr) {
    while (arr.some((ele) => Array.isArray(ele))) {
        arr = [].concat(...arr);
    }
    return arr;
}

function flatten3(arr) {
    return arr.toString().split(',').map(ele => +ele);
}

let arr = [1, 2, [3, 4, [5, [6]]]];
// console.log(flatten1(arr));
// console.log(flatten2(arr));
// console.log(arr.flat(Infinity));
console.log(flatten3(arr));