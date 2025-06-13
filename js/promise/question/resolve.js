/**
 * 若Promise的resolve是一个
 *  输出结果
 * Promise.resolve().then(() => {
 *     console.log(0);
 *     return Promise.resolve(4);
 * }).then((res) => {
 *     console.log(res)
 * })
 *
 * Promise.resolve().then(() => {
 *     console.log(1);
 * }).then(() => {
 *     console.log(2);
 * }).then(() => {
 *     console.log(3);
 * }).then(() => {
 *     console.log(5);
 * }).then(() =>{
 *     console.log(6);
 * })
 */

/**
 * 等同于下
 * 1. p1 fulfilled 微任务队列添加 [p1.onFulfilled] p2状态pedding 跳过
 * 2. p2 fulfilled 微任务队列 [p1.onFulfilled, p4.onFulfilled] 后续状态都为pedding
 * 3. 执行 p1.onFulfilled log0 p3状态为fulfilled 返回p3一个promise对象 会创建一个微任务 此时微任务队列是 [p4.onFulfilled, promiseResolveThenableJobTask]
 * let promiseResolveThenableJobTask = () => {
 *     p3.then((value) => {
 *         ReslovePromise(p2, value)
 *     })
 * }
 * 4. 执行p4.onFulfilled log1 此时微任务队列是 [promiseResolveThenableJobTask, p5.onFulfilled]
 * 5. 执行 promiseResolveThenableJobTask [p5.onFulfilled, p3.onFulfilled]
 * 6. 执行 p5.onFulfilled log2           [p3.onFulfilled, p6.onFulfilled]
 * 7. 执行p3.onFulfilled 将结果给 p2 p2此时状态为 fulfilled [p6.onFulfilled, p2.onFulfilled]
 * 8. 执行p6.onFulfilled log3 执行p2.onFulfilled log4
 * .....
 */
p1 = Promise.resolve();
p2 = p1.then(() => {
    console.log(0)
    p3 = Promise.resolve(4);
    return p3
})
p2.then(res => {
    console.log(res)
})

p4 = Promise.resolve();
p5 = p4.then(() => {console.log(1) })
p6 = p5.then(() => {console.log(2) })
p7 = p6.then(() => {console.log(3) })
p8 = p7.then(() => {console.log(5) })
p9 = p8.then(() => {console.log(6) })

