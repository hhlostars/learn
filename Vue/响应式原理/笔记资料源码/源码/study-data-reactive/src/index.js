// 要使用临时变量 才能完成get操作
// 用函数封装，用闭包去 完成set后的更新
// import defineReactive from './defineReactive'
// import Observer from './Observer'
import observe from './observe'


let obj = {
    // a: {
    //     m: {
    //         name: 'huhe'
    //     }
    // },
    // b: {
    //     j: 12
    // },
    // c: 100,
    arr: [1, 2, 3]
}

// function observe(val) {
//     if(typeof val !== 'object') return;
//     var ob;
//     if(typeof val.__ob__ !== 'undefined') {
//         ob = val.__ob__
//     } else {
//         ob = new Observer(val)
//     }
//     return ob
// }

console.log(observe(obj));
obj.b = 3
obj.arr.push({name: 13})
// console.log(obj.arr);
// console.log(obj.arr.__proto__)

// 属性嵌套时, 如上例 a 属性 不需要传 value
// defineReactive(obj, 'a')
// defineReactive(obj, 'b', 10)

// 没有访问 m 属性
// console.log(obj.a.m);

// let arr1 = []
// console.log(arr1);