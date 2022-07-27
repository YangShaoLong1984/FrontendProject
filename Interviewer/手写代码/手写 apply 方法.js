Function.prototype.myApply = function(context) {
    // 1.判断调用对象是否为函数，非函数则error
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    // 2.判断传入上下文对象是否存在，否则设为window
    context = context || window;
    // 3.将函数作为上下文对象的一个属性。
    context.fn = this;
    // 4.处理传入的参数：判断值是否传入
    // 5.使用上下文对象来调用这个方法，并保存返回结果
    let res = null;
    if (arguments[1]) {
        res = context.fn(...arguments[1]);
    } else {
        res = context.fn();
    }
    // 6.删除刚才新增的属性。
    delete context.fn;
    // 7.返回结果
    return res;
}

// DEMO
let person = {
    name: 'zs',
}
function say(age) {
    console.log(this.name, age);
}
say.apply(person, [11]) // 原生方法打印：zs 11
say.myApply(person, [22]) // 手写方法打印：zs 22