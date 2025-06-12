/**
 * @param fn
 * j
 */
function runMicroTask(fn) {
    if (typeof queueMicrotask === 'function') {
        queueMicrotask(fn)
    } else if (typeof process === 'object' && typeof process.nextTick === 'function') {
        process.nextTick(fn)
    } else if (typeof MutationObserver === 'function') {
        const text = document.createTextNode('')
        const observer = new MutationObserver(fn)
        observer.observe(text, { characterData: true })
        text.data = '1'
    } else {
        setTimeout(fn)
    }
}

function isPromiseLike(obj) {
    return obj && typeof obj.then === 'function'
}

module.exports = {
    runMicroTask,
    isPromiseLike
}