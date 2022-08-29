function debounce(fn, wait, immediate) {
    let timer
    return function () {
        // this指向依然指向原来的函数
        const context = this
        // 不同的函数会有不同的参数传入,对于参数使用arguments处理
        const args = [...arguments]
        // 如果有定时器id清除定时器
        if (timer) clearTimeout(timer)
        if (immediate) {
            const callNow = !timer
            timer = setTimeout(() => {
                // 相当于清空定时器
                timer = null
            }, wait)
            // 没有定时器id  修改this指向
            if (callNow) fn.apply(context, args)
        } else {
            timer = setTimeout(() => {
                // 修改this指向
                fn.apply(context, args)
            }, wait)
        }
    }
}

// DEMO
// 执行 debounce 函数返回新函数
let debounceTest = debounce(() => {
    console.log('hello');
}, 500, true);

let timer = setInterval(() => {
    debounceTest(); // 2s内，只会打印一次
}, 200);
setTimeout(() => {
    clearInterval(timer);
}, 2000);