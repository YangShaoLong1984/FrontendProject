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

        // 调用此方法就是成功
        let resolve = value => {
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resolve/reject 方法
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
            }
        }

        // 调用此方法就是失败
        let reject = reason => {
            // 状态为 PENDING 时才可以更新，防止 executor 中调用了两次 resolve/reject 方法
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
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
    }    
}

// DEMO1 - 同步版 成功执行
const promise = new Promise((resolve, reject) => {
    resolve('成功')
}).then(
    data => {
        console.log('success', data); // 打印： success 成功
    },
    err => {
        console.log('failed', err);
    }
)


/**
 * DEMO2 异步操作  执行失败
 * 如果在 executor()中传入一个异步操作的话
 * 执行下面测试脚本后发现，promise 没有任何返回
 * 因为 promise 调用 then 方法时，当前的 promise 并没有成功，一直处于 pending 状态。所以如果当调用then
 * 方法时，当前状态是 pending，我们需要先将成功和失败的回调分别存放起来，在executor()的异步任务被执行时,触
 * 发 resolve 或 reject，依次调用成功或失败的回调。
 */
let promise2 = new Promise((resolve, reject) => {
    // 传入一个异步操作
    setTimeout(() => {
        resolve('成功');
    }, 1000);
}).then(
    data => {
        console.log('success', data); // 异步，导致不会打印
    },
    err => {
        console.log('failed', err);
    }
)