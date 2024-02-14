/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1),
    set2 = new Set(nums2);

  for (let num of nums1) {
    if (set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }
  return [Array.from(set1), Array.from(set2)];
  // return [[...set1], [...set2]]
};