function mySetInterval(fn, timeout) {
    // 控制器，控制定时器是否继续执行
    let timer = {
        flag: true
    }
    // 设置递归函数，模拟定时器执行。
    function interval() {
        if (timer.flag) {
            fn();
            setTimeout(interval, timeout);
        }
    }
    // 启动定时器
    setTimeout(interval, timeout); // interval();
    // 返回控制器
    return timer
}

// DEMO
let testFn = mySetInterval(() => console.log('hello'), 500);
setTimeout(() => {
    testFn.flag = false;
}, 2000)