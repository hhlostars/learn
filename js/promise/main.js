// 构造promise
class MyPromise {
    constructor(callback) {

    }
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})