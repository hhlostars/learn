let obj = {}

Object.defineProperty(obj, 'a', {
  value: 1,
  writable: true,
  enumerable: true
})

console.log(obj);