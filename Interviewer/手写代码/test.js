// function mySetInterval(fn, time) {
//     let timer = {
//         flag: true,
//     }
//     function interval() {
//         if (timer.flag) {
//             fn();
//             setTimeout(interval, time);
//         }
//     }
//     interval();
//     return timer;
// }

// function mySetTimeout(fn, time) {
//     let now = Date.now();
//     let flag = true;
//     while (flag) {
//         if (Date.now() - now > time) {
//             flag = false;
//             fn();
//         }
//     }
// }

// // DEMO
// let timer = mySetInterval(() => {
//     console.log('hello');
// }, 500);
// mySetTimeout(() => {
//     timer.flag = false;
// }, 2000)


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
let testFn = mySetTimeout(() => console.log('hello'), 1000);