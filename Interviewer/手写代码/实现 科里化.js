function currying (fn) {
  // 存放每次调用的参数
  let args = []
  return function temp (...newArgs) {
    if (newArgs.length) {
      // 有参数就合并进去，然后返回自身
      args = [ ...args, ...newArgs ]
      return temp
    } else {
      // 没有参数了，也就是最后一个了，执行累计结果操作并返回结果
      let val = fn.apply(this, args)
      args = [] //保证再次调用时清空
      return val
    }
  }
}

// 每次调用的传进来的参数做累计处理
function reduce (...args) {
    return args.reduce((a, b) => a + b)
}

let add = currying(reduce)
console.log(add(1)(2, 3, 4)(5)())  //15
console.log(add(1)(2, 3)(4, 5)(4)(5)())  //15


// 实现方式2  --- 很奇怪，toString这个调用一直没有效果，为什么？
function add2(m) {
    function tmp(n) {
        return add2(m + n);
    }
    tmp.toString = function() {
        return m;
    }
    return tmp;
}

console.log(add2(2)(5)(3).toString());
