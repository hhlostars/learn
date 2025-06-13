/**
 * any返回第一个成功的结果
 * 若没有成功的AggregateError
 */

Promise.MyAny = (promises) => {
    let rejectCount = 0
    let rejectArr = []
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(res => {
                resolve(res)
            }, rej => {
                rejectCount++
                const err = new Error(rej)
                rejectArr.push(err)
                if (rejectCount === promises.length) {
                    const errors = new AggregateError(rejectArr, 'All promises were rejected')
                    reject(errors)
                }
            })
        })
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('wrong1')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    reject('wrong2')
})

Promise.MyAny([p1, p2]).then(res => {
    console.log(res)
}, reject => {
    console.log('err', reject)
})