// 函数节流的实现;
function throttle(fn, delay) {
    // 上一次执行 fn 的时间戳
    let previous = 0;
    // 将 throttle 处理结果当作函数返回
    return function() {
        let context = this;
        let args = arguments;
        let nowTime = Date.now();
   
        // 如果两次时间间隔超过了指定时间，则执行函数。
        if (nowTime - previous >= delay) {
            previous = Date.now();
            return fn.apply(context, args);
        }
    };
}

// DEMO
// 执行 throttle 函数返回新函数
const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
const timer = setInterval(betterFn, 10)
setTimeout(() => {
    clearInterval(timer)
}, 2000)