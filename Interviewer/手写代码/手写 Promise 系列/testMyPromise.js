const MyPromise = require('./MyPromise')

// 测试 MyPromise.resolve
MyPromise.resolve(new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 3000);
})).then(data=>{
    console.log(data,'success')
}).catch(err=>{
    console.log(err,'error')
})

// 测试 MyPromise.reject  MyPromise.prototype.finally MyPromise.prototype.catch
MyPromise.resolve(456).finally(()=>{
    return new MyPromise((resolve,reject)=>{
      setTimeout(() => {
          resolve(123)
      }, 3000);
    })
}).then(data=>{
    console.log(data,'success')
}).catch(err=>{
    console.log(err,'error')
})

// 测试 MyPromise.all
let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok1');
    }, 1000);
  })
  
let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('ok2');
    }, 1000);
})
  
// 测试 MyPromise.race
MyPromise.race([p1, p2]).then(data => {
    console.log('resolve', data);
}, err => {
    console.log('reject', err);
})

let p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok1');
    }, 1000);
  })
  
let p4 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('ok2');
    }, 1000);
})
  
MyPromise.all([p3, p4]).then(data => {
    console.log('resolve', data);
}, err => {
    console.log('reject', err);
})

