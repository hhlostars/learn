Promise.MyAllSettled = (promises) => {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                count++
                result[index] = {
                    status: 'fulfilled',
                    value: res
                }
                if (count === promises.length) {
                    resolve(result)
                }
            }, rej => {
                result[index] = {
                    status: 'rejected',
                    reason: rej
                }
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            })
        })
    })


}

// Promise.MyAllSettled(([1, 2])).then(res => {
//     console.log(res)
// })

Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error("一个错误")),
]).then((values) => console.log(values));