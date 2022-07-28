// 三个状态 PENDING FULFILLED REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
    constructor(executor) {
        // 默认状态为 PENDING
        this.status = PENDING;
        // 存放成功状态的值，默认为 undefined
        this.value = undefined;
        // 存放失败状态的值，默认为 undefined
        this.reason = undefined;
        // 存放成功的回调
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks = [];

        // 调用此方法就是成功
        let resolve = value => {
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resolve/reject 方法
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                // 依次将对应的函数执行
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }

        // 调用此方法就是失败
        let reject = reason => {
            // 状态为 PENDING 时才可以更新，防止 executor 中调用了两次 resolve/reject 方法
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                // 依次将对应的函数执行
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try {
            // 立即执行，将 resolve 和 reject 函数传给使用者
            executor(resolve, reject);
        } catch (error) {
            // 发生异常时执行失败逻辑
            reject(error);
        }
    }

    // 包含一个then方法，并接收两个参数（函数） onFulfilled、onRejected
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
            onRejected(this.reason);
        }

        if (this.status === PENDING) {
            // 如果 Promise 的状态是 pending，需要将 onFulfilled 和 onFulfilled 函数存放起来
            // 等待状态确定后，再依次将对应的函数执行
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })

            // 如果 Promise 的状态是 pending，需要将 onfulfilled 和 onRejected 函数存放起来
            // 等待状态确定后，再依次将对应的函数执行
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }    
}

// DEMO 
// ps：这其实是一个发布订阅模式，这种收集依赖 -> 触发通知 -> 取出依赖执行的方式，被广泛运用于发布订阅模式的实现。
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功');
    },1000);
  }).then(
    (data) => {
      console.log('success', data) // 控制台一秒后打印：success 成功
    },
    (err) => {
      console.log('failed', err)
    }
)