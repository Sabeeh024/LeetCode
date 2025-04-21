/**
 * Problem: Remove Element
 *
 * Approach:
 * Use two pointers (`i` and `j`) to iterate through the array.
 * - `j` scans every element.
 * - `i` keeps track of the next position to place a non-`val` element.
 * If `nums[j] !== val`, we place `nums[j]` at position `i` and increment `i`.
 * This approach ensures all non-`val` elements are moved to the front.
 * The number of valid (non-`val`) elements is tracked by `count`.
 *
 * Time Complexity: O(n)
 * - We go through the array once using the `j` pointer.
 * 
 * Space Complexity: O(1)
 * - The operation is done in-place with a constant amount of extra memory.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0, j = 0, count = 0;
    if (nums.length === 0) return 0;
    while (true) {
        if (nums[j] === val) j++;
        else {
            count++;
            if (i != j) {
                const temp = nums[i]
                nums[i] = nums[j];
                nums[j] = temp
                i++
            } else {
                i++;
                j++;
            }
        }

        if (j >= nums.length) break
    }

    return count
};

removeElement([3, 2, 2, 3], 3); // example # 1 : Expected Output: 2
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // example # 2 : Expected Output: 5
