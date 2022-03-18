var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      console.log(i);
      return [i, map.get(target - nums[i])]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};


let arr = [2, 7, 11, 15]
let target = 9
console.log(twoSum(arr, target));

if(undefined) {
  console.log(123);
}