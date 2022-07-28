function mySetTimeout(fn, time) {
    let now = Date.now();
    let flag = true;
    while (flag) {
        if (Date.now() - now > time) {
            flag = false;
            fn();
        }
    }
}

// DEMO
let testFn = mySetTimeout(() => console.log('hello'), 1000);