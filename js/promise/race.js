Promise.MyRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(res => {
                resolve(res)
            }, rej => {
                reject(rej)
            })
        })
    })

}
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 100)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 200)
})

const p3 = Promise.reject('wrong')

Promise.MyRace([1, p1, p2, p3, 234]).then(res => {
    console.log('res', res)
}, rej => {
    console.log('error', rej)
})