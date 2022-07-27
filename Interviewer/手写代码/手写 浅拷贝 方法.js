// 浅拷贝的实现
function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;

    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};

    // 遍历 object，只操作自有，继承得来的不拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key];
        }
    }

    return newObject;
}

// DEMO
const obj1 = {
    name: 'obj1',
    child: {
        childName: 'child1'
    }
}
let obj2 = shallowCopy(obj1);
// Object.assign(obj2, obj1); 原生js浅拷贝方法
obj2.name = 'obj2';
obj2.child.childName = 'child2';
console.log(obj1); // 打印：{ name: 'obj1', child: { childName: 'child2' } }
console.log(obj2); // 打印：{ name: 'obj2', child: { childName: 'child2' } }