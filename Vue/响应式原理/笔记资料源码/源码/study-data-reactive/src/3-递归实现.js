// 要使用临时变量 才能完成get操作
// 用函数封装，用闭包去 完成set后的更新

let obj = {
    a: {
        m: {
            ll: 123
        }
    },
    b: {

    }
}

function defineReactive(data, key, value) {
    if(arguments.length === 2) {
        value = data[key]
    }
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

// 属性嵌套时, 如上例 a 属性 不需要传 value
defineReactive(obj, 'a')
defineReactive(obj, 'b', 10)

// 没有访问 m 属性
console.log(obj.a.m);