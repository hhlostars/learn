let obj = {
  a: {
    
  }
}

Object.defineProperty(obj, 'a', {
  get() {
    console.log('get');
  },
  set() {
    console.log('set');
  }
})

let newObj = obj.a
newObj.c = 3