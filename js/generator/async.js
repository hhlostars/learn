/**
 * async 函数是什么？一句话，它就是 Generator 函数的语法糖。
 */

/**
 * async function fn(args) {
 *     const res1 = await request1
 *     const res2 = await request2
 * }
 *
 * // 等同于
 *
 * function fn(args) {
 *     return spawn(function* () {
 *         const res1 = yield request1
 *         const res2 = yield request2
 *     });
 * }
 */

function request(data) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 1000)
    })
}

function fn(args) {
    return spawn(function* () {
        const res1 = yield request(123)
        const res2 = yield request(456)
        return 123
    });
}

function spawn(genF) {
    return new Promise((resolve, reject) => {
        const gen = genF()
        let tempVal
        function next(val) {
            const { done, value } = gen.next(tempVal)
            tempVal = value
            console.log(done, value)
            if (done) return resolve(value)
            value.then(res => {
                console.log('promise', res)
                next()
            })
            // next(tempVal)
        }
        next()
    })
}

const p = fn()
p.then(res => {
    console.log('ppp', res)
})


// Promise.resolve(1).then(res => {
//     console.log('resolve', res)
// })