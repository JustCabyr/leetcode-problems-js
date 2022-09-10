/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  for (i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      return true;
    }
  }
  return false;
};