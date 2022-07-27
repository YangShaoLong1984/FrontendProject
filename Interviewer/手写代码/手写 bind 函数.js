Function.prototype.myBind = function(context) {
    // 1.判断调用对象是否为函数，非函数则error
    if (typeof this !== 'function') {
        throw new TypeError('error');
    }
    // 2.保存当前函数的引用，获取其余传入参数值。
    let args = Array.prototype.slice.call(arguments, 1)
    let fn = this; // this就是函数
    // 3.创建一个函数返回
    // 4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
    let resultFn = function() {
        return fn.apply(
            this instanceof resultFn ? this : context,
            args.concat(...arguments)
        )
    }
    // 重新绑定原型
    resultFn.prototype = fn.prototype;
    return resultFn;
}


// DEMO
let person = {
    name: 'zs',
}
function say(age) {
    console.log(this.name, age);
}
let sayPerson = say.bind(person, 22);
sayPerson() // 原生方法打印：zs 22
let sayPerson2 = say.myBind(person, 22);
sayPerson() // 手写方法打印：zs 22