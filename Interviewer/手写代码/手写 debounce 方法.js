// fn 是需要防抖处理的函数
// wait 是时间间隔
function debounce(fn, wait) {
    // 通过闭包缓存一个定时器 id
    let timer = null;

    // 将 debounce 处理结果当作函数返回
    // 触发事件回调时执行这个返回函数
    return function() {
        // this 保存给 context
        const context = this;
        let args = [...arguments];

        // 如果已经设定过定时器就清空上一次的定时器
        if (timer) {
            clearTimeout(timer);
        }
        

        // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
        timer = setTimeout(() => {
            result = fn.apply(context, args);
        }, wait);
    }

}

// DEMO
// 执行 debounce 函数返回新函数
let debounceTest = debounce(() => {
    console.log('hello');
}, 2000);
debounceTest();
debounceTest();
debounceTest(); // 连续调用三次，只会打印一次 "hello"