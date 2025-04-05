/**
 * Problem: Merge Sorted Array
 *
 * Approach:
 * - Use two pointers to compare elements from the end of `nums1` and `nums2`.
 * - Place the larger element at the end of `nums1` and move the pointer accordingly.
 * - Repeat until all elements from `nums2` are merged. If any elements remain in `nums1`, they are already in place.
 *
 * Time Complexity: O(m + n) - We process each element of both arrays once.
 * Space Complexity: O(1) - The merge happens in-place, using constant extra space.
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  console.log(`Input: `, { nums1, m, nums2, n });
  let k = m - 1,
    j = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (j < 0) break;
    if (nums1[k] >= nums2[j]) {
      nums1[i] = nums1[k];
      k--;
    } else {
      nums1[i] = nums2[j];
      j--;
    }
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // example # 1 : Expected Output: [1,2,2,3,5,6]
merge([1], 1, [], 0); // example # 2 : Expected Output: [1]
merge([0], 0, [], 0); // example # 2 : Expected Output: [0]
