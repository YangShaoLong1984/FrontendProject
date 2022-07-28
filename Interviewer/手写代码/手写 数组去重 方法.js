let arr1 = [1, 3, 3, 5, 2, 2, 3, 1];
let arr2 = [1, 3, 3, 5, 2, 2, 3, 1];
let arr3 = [1, 3, 3, 5, 2, 2, 3, 1];
let arr4 = [1, 3, 3, 5, 2, 2, 3, 1];
let arr5 = [1, 3, 3, 5, 2, 2, 3, 1]; 

// 直接使用 Set()
function getRes(arr) {
    return Array.from(new Set(arr));
}
console.log(getRes([1, 3, 3, 5, 2, 2, 3, 1]));

// 排序 + 双指针去重 => 会改变数组原本顺序
function getRes1(arr) {
    arr.sort((a, b) => a - b);
    let slow = 0, fast = 0;
    while (fast < arr.length) {
        if (arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
        }
        fast++;
    }
    arr.length = slow + 1;
    return arr;
}
console.log(getRes1(arr1));

// 暴力去重 双重遍历
function getRes2(arr) {
    let newArr = [];
    let isRepeat;
    for (let i = 0; i < arr.length; i++) {
        isRepeat = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isRepeat = true;
                break;
            }
        }
        if (!isRepeat) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getRes2(arr2));

// 使用数组方法 includes()
function getRes3(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getRes3(arr3));

// 使用 indexOf()
function getRes4(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getRes4(arr4));

// Map()
function getRes5(arr) {
    let newArr = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getRes5(arr5));