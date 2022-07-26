// 实现 new 运算
function _new(constructor, params) {
    const args = [...arguments];
    const _constructor = args.shift();
    let newObject = Object.create(_constructor.prototype);
    let result = _constructor.apply(newObject, args);
    return (typeof result === 'object' && result !== null) ? result : newObject;
}


function Person(name) {
    this.name = name;
}

console.log(_new(Person, 'zs'));
console.log(new Person('zs'));