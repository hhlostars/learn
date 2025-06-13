/**
 * all返回 所有成功的结果
 * 若有reject 返回该reject
 */

Promise.MyAll = (promises) => {
    const result = new Array(promises.length)
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                count++
                result[index] = res
                if (count === promises.length) {
                    resolve(result)
                }
            }, rej => {
                reject(rej)
            })
        })

    })
}

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 3000)
})
const p2 = new Promise((res, rej) => {
    res(123)
})
const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(3)
    }, 2000)
})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log('原生all1', res)
// })
// Promise.all([1, 2, 3]).then(res => {
//     console.log('原生all2', res)
// })

Promise.MyAll([p1, p2, p3]).then(res => {
    console.log('all1', res)
})
// Promise.MyAll([1, 2, 3]).then(res => {
//     console.log('all2', res)
// })
