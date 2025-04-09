/**
 * Problem: Move Zeroes
 *
 * Approach: 
 * - Use two pointers, `i` and `j`, to traverse the array and move the zeroes to the end.
 * - Pointer `i` will track the position to place the next non-zero element.
 * - Pointer `j` will iterate through the entire array to find non-zero elements.
 * 
 * Time Complexity:
 * - O(n), where n is the length of the array, since we iterate through the array once.
 *
 * Space Complexity:
 * - O(1), since we are modifying the array in-place and not using any extra space.
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 1;
  if (nums.length < 2) {
    console.log(nums);
    return;
  }
  while (true) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      i++;
      j = i + 1;
    }

    if (i >= nums.length || j >= nums.length) {
      console.log(nums);
      break;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]); // example # 1 : Expected Output: [1,3,12,0,0]
moveZeroes([0]); // example # 2 : Expected Output: [0]
