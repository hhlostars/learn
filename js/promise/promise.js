const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 构造promise
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
        if (this.#status === PENDING) return
        this.#tasks.forEach(task => task())
    }

    then(onFulfilled, onRejected) {
        const task = () => {
            if (this.#status === FULFILLED) {
                onFulfilled(this.#value)
            }
            if (this.#status === REJECTED) {
                onRejected(this.#value)
            }
        }
        this.#tasks.push(task)
        this.#run()
    }
}

const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('error')
    }, 1000)
})
p2.then(res => {
    console.log('success', res)
}, rej => {
    console.log(rej)
})
