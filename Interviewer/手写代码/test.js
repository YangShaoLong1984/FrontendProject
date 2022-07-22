function _new(constructor, params) {
  const args = [...arguments];
  const contruc = args.shift();
  let newObject = Object.create(contruc.prototype);
  let result = contruc.apply(newObject, args);
  return (typeof result === 'object' && result !== null) ? result : newObject;
}

function Person(name) {
  this.name = name;
}
const person = _new(Person, 'zs');
console.log(person);