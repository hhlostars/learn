/**
 * 自动执行 Generator 函数
 */

// function * fn() {
//     yield 1
//     yield 2
//     yield 3
// }
//
// // 同步的自动执行 在done为false时 调用next方法 知道done为true
// function run(gen) {
//     let g = gen()
//     function next(data) {
//         const { value, done } = g.next()
//         console.log(value, done)
//         !done && next(value)
//     }
//     next()
// }
//
// run(fn)

function asyncFn(num, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num)
        }, timeout)
    })
}

function * gen() {
    const res1 = yield asyncFn(123, 1000)
    const res2 = yield asyncFn(666, 2000)
    console.log(res1)
    console.log(res2)
}

// const g = gen()
// g.next().value.then(res => {
//     console.log(res)
//     g.next().value.then(res2 => {
//         console.log(res2)
//     })
// })

function run(g) {
    const gen = g()
    function next(val) {
        const { value, done } = gen.next(val)
        if (done) {
            console.log(value)
            return value
        }
        !done && value.then(res => {
            next(res)
        })
    }
    next()
}
run(gen)