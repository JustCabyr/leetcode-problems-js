/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    if (map.has(currVal)) {
      return [map.get(currVal), i];
    }
    let diff = target - currVal;
    map.set(diff, i);
  }
};