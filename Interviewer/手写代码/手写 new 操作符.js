/**
 * 在调用 `new` 的过程中会发生以上四件事情：
 * （1）首先创建了一个新的空对象
 * （2）设置原型，将对象的原型设置为函数的 prototype 对象。
 * （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 * （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
 */
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    //将arguments对象转为数组
    var args = [].slice.call(arguments);
    //取出构造函数
    var constructor = args.shift();
    //创建一个空对象，继承构造函数的ptptotype属性：creat指定原型对象(第一个参数)和属性（余后参数），返回一个新的对象
    var newObject = Object.create(constructor.prototype);
    //将this指向新建对象，执行构造函数 args是一个数组，它将作为参数传递给constructor
    var result = constructor.apply(newObject, args);
    //如果返回结果是对象，就直接返回，否则返回newObject对象
    return (typeof result === 'object' && result != null) ? result : newObject;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 测试
let actor = _new(Person, 'zs', 22);
console.log(actor);