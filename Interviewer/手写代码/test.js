class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.result = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if (this.status !== 'pending') return;
            this.status === 'fulfilled';
            this.result = value;
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.pop()(this.result);
            }
        }

        const reject = reason => {
            if (this.status !== 'pending') return;
            this.status === 'rejected';
            this.result = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.pop()(this.result);
            }
        }
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        let thenPromise = new MyPromise((resolve, reject) => {
            const resolvePromise = cb => {
                setTimeout(() => {
                    try {
                        const x = cb(this.result);
                        if (x instanceof MyPromise) {
                            x.then(resolve, reject);
                        } else {
                            resolve(x);
                        }
                    } catch (err) {
                        reject(err);
                        throw new Error(err);
                    }
                }, 0);
            }
            if (this.status === 'fulfilled') {
                resolvePromise(onFulfilled);
            } else if (this.status === 'rejected') {
                resolvePromise(onRejected);
            } else if (this.status === 'pending') {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
        })
        return thenPromise;
    }
}


const p = new MyPromise((resolve, reject) => {
    resolve(100);
}).then(
    // res => reject(res * 100),
    res => new MyPromise((resolve, reject) => resolve(res)),
    err => err
).then(
    (res) => console.log(res)
)