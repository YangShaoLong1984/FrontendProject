function throttle(fn, delay) {
    let timer = null;
    return function() {
         let context = this;
         let args = arguments;
         if (!timer) {
             timer = setTimeout(() => {
                 fn.apply(context, args);
                 clearTimeout(timer);
                 timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
             }, delay)
         }
    }
 }

// DEMO
// 执行 throttle 函数返回新函数
const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
const timer = setInterval(betterFn, 10)
setTimeout(() => {
    clearInterval(timer)
}, 2000)