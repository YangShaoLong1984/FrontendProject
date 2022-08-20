const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        this.status = PENDING;
        this.result = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = result => {
            if (this.status !== PENDING) return;
            this.status = FULFILLED;
            this.result = result;
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.pop()(this.result);
            }
        }
        const reject = reason => {
            if (this.status !== PENDING) return;
            this.status = REJECTED;
            this.result = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.pop()(this.result);
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            throw new Error(error);
        }
    }

    then(onFulfilled, onRejected) {
        // 判断是否为函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
        let thenPromise = new MyPromise((resolve, rejected) => {

            const resolvePromise = cb => {
                setTimeout(() => {
                    try {
                        const x = cb(this.result);
                        if (x instanceof MyPromise) {
                            x.then(resolve, rejected);
                        } else {
                            resolve(x);
                        };
                    } catch (error) {
                        rejected(error);
                        throw new Error(error);
                    }

                })
            }

            if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            } else if (this.status === FULFILLED) {
                resolvePromise(onFulfilled);
            } else if (this.status === REJECTED) {

            }   resolvePromise(onRejected);
        })
        return thenPromise;
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(callback) {
        let P = this.constructor;
        console.log(P);
        return this.then(
            value => {
                return P.resolve(callback()).then(() => value)
            },
            reason => {
                return P.resolve(callback()).then(() => {
                    throw reason;
                })
            }
        )
    }

    static resolve(value) {
        return new MyPromise((resolve, rejected) => {
            if (value instanceof MyPromise) {
                value.then(value => {
                    resolve(value);
                },
                reason => {
                    rejected(reason);
                }
                )
            } else {
                resolve(value);
            }
        })
    }
}

let p = new MyPromise((resolve, rejected) => {
    resolve(2)
}).then(
    err => console.log(err)
).finally(() => {
    console.log(888);
})