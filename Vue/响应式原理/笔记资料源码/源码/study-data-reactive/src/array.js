// 获取原方法
const arrayPrototype = Array.prototype 

function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}

// 改写数组上面的七个 会更改数组的 方法


// 以Array.prototype为原型创建arraymethods对象
const arrayMethods = Object.create(arrayPrototype)

const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshit',
  'splice',
  'sort',
  'reverse'
]

methodsNeedChange.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新方法
  def(arrayMethods, methodName, function () {
    console.log('监听到了', methodName, '方法');
    const ob = this.__ob__
    // push、unshift、splice 插入的新项 也要变成 observe的
    let inserted = []
    switch (methodName) {
      case 'push':
      case 'unshift':
        inserted = [...arguments];
        break;
      case 'splice':
        inserted = [...arguments].slice(2);
        break
    }

    if(inserted.length > 0) {
      ob.obserArray(inserted)
    }
    // console.log(this);
    // 这个方法是数组调用 arr.push()
    // 调用原方法
    original.apply(this, arguments)
  }, false)
})

export {
  arrayMethods
}