const obj = {
  name: 'huhe',
  age: 18
}

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log('get操作', target, key);
    // console.log('get', key);
    return target[key]
  },
  set(target, key, newValue) {
    
  }
})

console.log(objProxy.name);
console.log(objProxy.age);