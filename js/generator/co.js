function asyncFn(num, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num)
        }, timeout)
    })
}

function * gen() {
    const res1 = yield asyncFn(123, 1000)
    const res2 = yield asyncFn(666, 1500)
    console.log(res1)
    console.log(res2)
}

function co(gen) {
    let ctx = this
    return new Promise(function (res, rej) {
        if (typeof gen === 'function') gen = gen.call(ctx);
        if (!gen || typeof gen.next !== 'function') return res(gen);
        onFulfilled();
        function onFulfilled(res) {
            let ret;
            try {
                ret = gen.next(res);
            } catch (e) {
                return rej(e);
            }
            next(ret);
        }
        function next(ret) {
            if (ret.done) return res(ret.value)
            let value = Promise.resolve(ret.value)
            return value.then(onFulfilled)
        }
    })
}

co(gen).then(() => {
    console.log('Generator 函数执行完成')
})

console.log(typeof gen)