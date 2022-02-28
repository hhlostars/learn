import defineReactive from './defineReactive'
import { arrayMethods } from './array'
import observe from './observe'
// 将正常的object 转换成 每个层级的属性都是响应式(都可以被侦测的)
function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}


export default class Observer {
  constructor(value) {
    console.info('我是Observer构造器给', value, '新增__ob__');
    // 增加 __ob__属性
    def(value, '__ob__', this, false)
    // 检查数组还是对象
    if(Array.isArray(value)) {
      // 如果是数组, 将原型 指向 arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
      // 遍历数组
      this.obserArray(value)
    } else {
      this.walk(value)
    }
  }
  // 遍历
  walk(value) {
    console.info('我是Observer构造器, 循环遍历属性值');
    for (let key in value) {
      defineReactive(value, key)
    }
  }

  obserArray(arr) {
    for(let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i])
    }
  }
}