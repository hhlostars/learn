/**
 * [resolve处理的微任务, log1]
 * [log1, 返回给promise结果]          log 1
 * [返回给promise结果, log2]          promise状态fulfilled
 * [log2, logres]                   log2
 * [logres, log3]                   logres
 * [log3]                           log3
 */

new Promise((resolve, reject) => {
    let resolvedP = Promise.resolve()
    resolve(resolvedP)
}).then(() => {
    console.log('res')
})

Promise.resolve()
    .then(() => { console.log(1) })
    .then(() => { console.log(2) })
    .then(() => { console.log(3) })

