function deepCopy(object) {
    if (!object && typeof object !== 'object') return;
    let newObject = Array.isArray(object) ? [] : {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = 
                typeof object === 'object' ? deepCopy(object[key]) : object[key];
        }
    }
    return newObject;
}

let obj1 = {
    name: 'obj1',
    child: {
        childName: 'child1'
    }
}
let obj2 = deepCopy(obj1);
obj2.name = 'obj2';
obj2.child.childName = 'child2';
console.log(obj1);
console.log(obj2);