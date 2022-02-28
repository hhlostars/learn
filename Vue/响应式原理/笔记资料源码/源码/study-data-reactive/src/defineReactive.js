import observe from './observe'

export default function defineReactive(data, key, value) {
  console.info('defineReactive给', data, `的${key}属性增加响应式`);
  if (arguments.length === 2) {
    value = data[key]
  }

  observe(value)

  Object.defineProperty(data, key, {
    enumerable: true,
    // 可删除
    configurable: true,
    get() {
      console.log(`访问`, data, `的${key}属性`);
      return value
    },
    set(newVal) {
      console.log(`修改`, data, `的${key}属性`);
      if (value === newVal) {
        return
      }
      value = newVal
      observe(newVal)
    }
  })
}