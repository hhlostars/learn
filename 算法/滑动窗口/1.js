var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = new Map()
  // left为左指针， right为右指针
  // 用map——key存放数字，val存放下标
  // right 指针的key 不存在 则存入
  // 存在 则 将left移动到 存在的 数字 的下标 + 1
  let left = 0
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = map.get(s[right]) + 1
      // set.delete(s[right])
    }
    // set.add(s[right])
    map.set(s[right], right)
    max = Math.max(max, right - left + 1)
  }

  return max
};