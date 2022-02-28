let obj = {}
let temp;
Object.defineProperty(obj, 'a', {
    // value: 3,
    // 是否可写
    // writable: false,
    // enumerable: false,
    get() {
        console.log('访问a');
        return temp
    },
    set(newValue) {
        console.log('改变a', newValue);
        temp = newValue
    }
})

Object.defineProperty(obj, 'b', {
    value: 'b',
    // 是否可写
    writable: false,
    enumerable: true
})

obj.a = 44
// obj.a
console.log(obj.a);

// for (const key in obj) {
//     console.log(key);
// }

// get 需要返回值 才能在访问时得到
// 需要开辟临时变量才能使 set的数据保存