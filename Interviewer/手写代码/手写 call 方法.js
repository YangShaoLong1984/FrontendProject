Function.prototype.myCall = function(context) {
    // 1.判断调用对象是否为函数，非函数则error
    if (typeof this !== 'function') {
        throw new Error('type error');
    }
    // 2.判断传入上下文对象是否存在，否则设为window
    context = context || window; // context = { name: 'zs' }
    // 3.将函数作为上下文对象的一个属性。
    context.fn = this; // context = { name: 'zs', fn: [Function: say] }
    // 4.处理传入的参数，截取第一个参数（即将绑定对象）后的所有参数。
    let args = [...arguments].slice(1);
    // 5.使用上下文对象来调用这个方法，并保存返回结果
    let result = context.fn(...args);
    // 6.删除刚才新增的属性。
    delete context.fn;
    // 7.返回结果
    return result;
}

// DEMO
let person = {
    name: 'zs'
}
function say(age) {
    console.log(this.name, age);
}

say.call(person, 22); // 原生方法打印：zs 22
say.myCall(person, 22); // 手写方法打印：zs 22