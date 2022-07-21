// immediate 表示第一次是否立即执行
function debounce(fn, wait, immediate) {
    let timer = null;
    return function() {
        // this 保存给 context
        const context = this;
        let args = arguments;

        if (timer) clearTimeout(timer);

        // immediate 为 true 表示第一次触发后执行
      	// timer 为空表示首次触发
        if (immediate && !timer) {
            fn.apply(context, args);
        }

        // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }

}

// DEMO
// 执行 debounce 函数返回新函数
let debounceTest = debounce(() => {
    console.log('hello');
}, 2000, true);

// 第一次执行，打印 hello，后续只有在停止执行 2s 后才执行函数 fn
debounceTest(); // 打印
debounceTest();
debounceTest(); // 打印 