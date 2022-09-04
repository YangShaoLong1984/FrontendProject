// 参考链接：https://juejin.cn/post/6994594642280857630#heading-7
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    // 构造函数，new的时候自动执行
    constructor(executor) {
        // 初始状态为 pending
        this.status = PENDING;
        // 存储终值 成功的value 或者 失败的reason
        this.result = null;
        // 存储 onFulfilled 和 onRejected 的回调函数数组
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        // 用箭头函数就可以让this指向当前实例对象，不用显示绑定 普通函数this指向的是window或者undefined
        const resolve = value => {
            // state是不可变的
            if (this.status !== 'pending') return;
            // 如果执行resolve，状态变为fulfilled
            this.status = 'fulfilled';
            // 终值为传进来的值
            this.result = value;
                    // 执行保存的成功回调
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(this.result);
            }
        }
        const reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.result = reason;

                // 依次执行 onRejectedCallbacks 数组中的回调函数
                while (this.onRejectedCallbacks.length) {
                    this.onRejectedCallbacks.shift()(this.result);
                }
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    // 实现 MyPromise.prototype.then() 方法
    then(onFulfilled, onRejected) {
        // 判断是否为函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;

        let thenPromise = new MyPromise((resolve, reject) => {
            
            const resolvePromise = cb => {
                // 把 try cath 整体加入setTimeout里面模拟微任务，目的是为了让其中代码放在下一次事件循环执行，只要能达到异步效果
                // 真正的微任务：queueMicrotask，参考链接：https://juejin.cn/post/6945319439772434469#heading-20
                setTimeout(() => {
                    try {
                        const x = cb(this.result);
                        // 如果相等了，说明return的是自己，抛出类型错误并返回
                        if (x === MyPromise) {
                            // 不能返回自身
                            throw new Error('不能返回自身');
                        }
                        if (x instanceof MyPromise) {
                            /**
                             * 如果返回值是 MyPromise
                             *  1. 返回值为成功，新 MyPromise 就是成功
                             *  2. 返回值为失败，新 MyPromise 就是失败
                             */
                            x.then(resolve, reject);
                        } else {
                            /**
                             * 如果返回值不是 Promise，直接成功
                             */
                            resolve(x);
                        }
                    } catch (err) {
                        // 处理报错
                        reject(err);
                        throw new Error(err);
                    }
                })
            }
            if (this.status === FULFILLED) {
                // 如果当前为成功状态，执行第一个回调
                resolvePromise(onFulfilled);
            } else if (this.status === REJECTED) {
                // 如果当前为失败状态，执行第二个回调
                resolvePromise(onRejected);
            } else if (this.status === PENDING) {
                // 如果状态为待定状态，暂时保存两个回调，因为可能多次then，所以用数组保存
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
        }) 
        // 返回包装的Promise
        return thenPromise;
    }

    // 实现 MyPromise.prototype.catch() 方法
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    // 实现 MyPromise.prototype.finally() 方法
    finally(callback) {
        let P = this.constructor;
        return this.then(
            value => {
                return P.resolve(callback()).then(()=>value)
            },
            reason => {
                return P.resolve(callback()).then(()=>{throw reason})
          })
    }

    // 实现 MyPromise.resolve() 方法
    static resolve(value) {
        //返回promise对象
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(
                    value=>{
                        resolve(value);
                    }, 
                    reason=>{
                        reject(reason);
                    }
                )
            } else {
                //状态设置为成功
                resolve(value);
            }
        });
    }

    // 实现 MyPromise.reject 方法
    static reject(reason) {
        return new MyPromise((resolve, reject)=>{
            reject(reason);
        });
    }

    // 实现 MyPromise.all() 方法
    static all(promises) {
        // 返回结果为promise对象
        return new MyPromise((resolve, reject) => {
            if (!Array.isArray(promises)) { //传入的参数是否为数组
                return reject(new Error('传入的参数不是数组！'))
            }
    
            // 声明变量
            let count = 0;
            let arr = [];
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    v => {
                        // 得知对象的状态是成功
                        // 每个promise对象 都成功
                        count++;
                        // 将当前promise对象成功的结果 存入到数组中
                        arr[i] = v;
                        if(count === promises.length){
                            // 修改状态
                            resolve(arr);
                        }
                    }, 
                    r => {
                        reject(r);
                    }
                );
            }
        });
    }

    // 添加 MyPromise.race() 方法
    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    // 修改返回对象的状态为 『成功』
                    v => {
                        resolve(v);
                    },
                    r =>{
                    //修改返回对象的状态为 『失败』
                        reject(r);
                    })
            }
        });
    }
}

module.exports = MyPromise;