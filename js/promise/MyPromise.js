const {isPromiseLike, runMicroTask} = require("./tool");

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    #status = PENDING
    #tasks = []
    // 存储promise内部结果
    #value
    constructor(executor) {
        const resolve = (val) => {
            this.#changeStatus(FULFILLED, val)
        }
        const reject = (val) => {
            this.#changeStatus(REJECTED, val)
        }
        executor(resolve, reject)
    }

    #changeStatus(status, val) {
        if (this.#status !== PENDING) return
        this.#status = status
        this.#value = val
        this.#run()
    }

    #run() {
        runMicroTask(() => {
            if (this.#status === PENDING) return
            this.#tasks.forEach(task => task())
            // 每次执行完清空
            this.#tasks = []
        })

    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const task = () => {
                try {
                    const cb = this.#status === FULFILLED ? onFulfilled : onRejected
                    if (typeof cb !== 'function') {
                        // 空值处理
                        // null、undefined
                        if (this.#status === FULFILLED) {
                            resolve(this.#value)
                        } else {
                            reject(this.#value)
                        }
                    }
                    const res = cb(this.#value)
                    if (isPromiseLike(res)) {
                        console.log(res)
                        res.then(resolve, reject)
                    } else {
                        resolve(res)
                    }
                } catch (e) {
                    reject(e)
                }
            }
            this.#tasks.push(task)
            this.#run()
        })
    }
}
/**
 * 1.then方法
 *  a.then返回一个promise
 *  b.promise状态改变后 后面的then方法是该状态 并且参数是resolve、reject的值
 *  c.then中的错误会被后续then中的reject捕获
 *  d.then中传递的是null的话，则将前面resolve reject 传递给后面的then
 *  e.若then是reject状态 后续的then是resolve状态
 *  f.若then中返回一个新的promise 后续then的参数是这个promise resolve、reject的值
 */

const p = new MyPromise((res, rej) => {
    res(123)
    // rej(123)
})

// b
p.then(res => {
    console.log('res', res)
}, rej => {
    console.log('rej', rej)
})

// c
p.then(res => {
    throw 'error'
}).then(null, rej => {
    console.log('捕获到错误', rej)
})

// d
p.then(null, null).then(res => {
    console.log('空值传递res', res)
}, rej => {
    console.log('空值传递rej', rej)
})

// e
p.then(null, rej => {
    console.log('e', rej)
    return 123
}).then(res => {
    console.log('后续都是resolve', res)
})

// f
p.then(res => {
    return new Promise((resolve, reject) => {
        resolve('success')
        // reject(123)
    })
}).then(res => {
    console.log('返回的是promise--res', res)
}, rej => {
    console.log('返回的是promise--rej', rej)
})
