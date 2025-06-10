/**
 * 1. 返回值是一个遍历器对象 Object [Generator] {}
 * 2. 形式上，Generator 函数是一个普通函数，但是有两个特征。
 *      一是，function关键字与函数名之间有一个星号；
 *      二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
 * 3. 该函数惰性执行 调用 next 才执行
 * 4. yield后面的那个表达式的值，作为返回的对象的value属性
 */


function * helloworldGenerator() {
    console.log('函数执行')
    yield 'hello';
    yield 'world';
    return 123
}

const hw = helloworldGenerator()

// Object [Generator] {}
// console.log(hw)

// // { value: 'hello', done: false }
console.log(hw.next())

// // { value: 'world', done: false }
// console.log(hw.next())
//
// // { value: 123, done: true }
// console.log(hw.next())

/**
 * yield表达式本身没有返回值，或者说总是返回undefined。
 * next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
 */

// function * f() {
//     for (let i = 0; i < 10; i++) {
//         let reset = yield i
//         console.log(reset)
//         if (reset) { i = -1 }
//     }
//
// }
// const g = f()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next(true))

/**
 * for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象
 * 且此时不再需要调用next方法
 */
// function* foo() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }
//
// for (let v of foo()) {
//     console.log(v);
// }
// 1 2 3 4 5