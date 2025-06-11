function maxSlidingWindow(nums, k) {
    const res = []
    // 滑动过程中维持一个单调递减的栈
    // 用数组保存
    const stack = []
    for(let i = 0; i < nums.length; i++) {
        if (i > k - 1) {
            if (stack[0][1] === i - k) {
                stack.shift()
            }
        }
        let top = stack[stack.length - 1]
        const num = nums[i]
        while (top && num > top[0]) {
            top = stack.pop()
        }
        stack.push([num, i])
        if (i >= k - 1) {
            res.push(stack[0][0])
        }


    }
    console.log(res)
    return res
}

maxSlidingWindow([1,3,1,2,0,5], 3)