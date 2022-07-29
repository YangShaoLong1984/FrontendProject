class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve, this.reject)
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.result = null // 终值
        this.status = 'pending' // 状态
        this.onFulfilledCallbacks = [] // 保存成功回调
        this.onRejectedCallbacks = [] // 保存失败回调
    }

    resolve(value) {
        console.log(1);
        // state是不可变的
        if (this.status !== 'pending') return
        // 如果执行resolve，状态变为fulfilled
        this.status = 'fulfilled'
        // 终值为传进来的值
        this.result = value
                // 执行保存的成功回调
        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.result)
        }
    }

    reject(reason) {
        console.log(2);
        // state是不可变的
        if (this.status !== 'pending') return
        // 如果执行reject，状态变为rejected
        this.status = 'rejected'
        // 终值为传进来的reason
        this.result = reason
                // 执行保存的失败回调
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.result)
        }

    }
    then(onFulfilled, onRejected) {
        // 接收两个回调 onFulfilled, onRejected

        // 参数校验，确保一定是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }


        let thenPromise = new MyPromise((resolve, reject) => {

            const resolvePromise = cb => {
                try {
                    const x = cb(this.result)
                    if (x === MyPromise) {
                        // 不能返回自身哦
                        throw new Error('不能返回自身。。。')
                    }
                    if (x instanceof MyPromise) {
                        // 如果返回值是Promise
                        // 如果返回值是promise对象，返回值为成功，新promise就是成功
                        // 如果返回值是promise对象，返回值为失败，新promise就是失败
                        // 谁知道返回的promise是失败成功？只有then知道
                        x.then(resolve, reject)
                    } else {
                        // 非Promise就直接成功
                        resolve(x)
                    }
                } catch (err) {
                    // 处理报错
                    reject(err)
                    throw new Error(err)
                }
            }

            if (this.status === 'fulfilled') {
                // 如果当前为成功状态，执行第一个回调
                resolvePromise(onFulfilled)
            } else if (this.status === 'rejected') {
                // 如果当前为失败状态，执行第二个回调
                resolvePromise(onRejected)
            } else if (this.status === 'pending') {
                // 如果状态为待定状态，暂时保存两个回调
                // 如果状态为待定状态，暂时保存两个回调
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
            }
        })
        console.log(100);
        // 返回这个包装的Promise
        return thenPromise

    }
}

const test4 = new MyPromise((resolve, reject) => {
    resolve(100) // 输出 状态：失败 值：200
    // reject(100) // 输出 状态：成功 值：300
    // 这里可没搞反哦。真的搞懂了，就知道了为啥这里是反的
  }).then(res => new MyPromise((resolve, reject) => reject(3 * res)), err => new MyPromise((resolve, reject) => resolve(3 * err)))
    .then(res => console.log('成功', res), err => console.log('失败', err))




    
    
    const resolvePromise = cb => {
        setTimeout(() => {
            try {
                const x = cb(this.PromiseResult)
                if (x === thenPromise) {
                    // 不能返回自身哦
                    throw new Error('不能返回自身。。。')
                }
                if (x instanceof MyPromise) {
                    // 如果返回值是Promise
                    // 如果返回值是promise对象，返回值为成功，新promise就是成功
                    // 如果返回值是promise对象，返回值为失败，新promise就是失败
                    // 谁知道返回的promise是失败成功？只有then知道
                    x.then(resolve, reject)
                } else {
                    // 非Promise就直接成功
                    resolve(x)
                }
            } catch (err) {
                // 处理报错
                reject(err)
                throw new Error(err)
            }
        })
    }
