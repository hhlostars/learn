// 要使用临时变量 才能完成get操作
// 用函数封装，用闭包去 完成set后的更新

let obj = {

}

function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: true,
        // 可删除
        configurable: true,
        get() {
            console.log(`访问${key}属性`);
            return value
        },
        set(newVal) {
            if(value === newVal) {
                return
            }
            value = newVal
        }
    })
}


defineReactive(obj, 'a', 3)
defineReactive(obj, 'b', 10)

obj.a