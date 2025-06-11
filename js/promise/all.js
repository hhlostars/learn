Promise.MyAll = function(promises) {
    const pArr = [...promises]
    const result = []
    return new Promise((resolve, reject) => {
        pArr.forEach((p, index) => {
            Promise.resolve(p).then(res => {
                result[index] = res
                if (index + 1 === pArr.length) {
                    resolve(result)
                }
            }, reject)
        })
    })

}
console.time()
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(123)
    }, 1000)
})
// const p2 = Promise.reject(1)
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(456)
//     }, 2000)
// })

// Promise.MyAll([p1, p2]).then(res => {
//     console.timeEnd()
//     console.log(res)
// })
Promise.all([1, 2, 3]).then(res => {
    console.timeEnd()
    console.log(res)
})
// Promise.all([p1, p2]).then(res => {
//     console.timeEnd()
//     console.log(res)
// })
