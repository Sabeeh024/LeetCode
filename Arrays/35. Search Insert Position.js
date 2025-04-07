/**
 * Problem: Search Insert Position
 *
 * Approach:
 * - We use binary search to find the position where the target number should be inserted in the sorted array.
 * - We initialize two pointers, `windowStart` and `windowEnd`, representing the range of the array we are currently searching in.
 * - We calculate the midpoint of the array and compare the value at that position (`windowMidEle`) with the target.
 * - If the value is equal to the target, we return the current index (`windowMid`).
 * - If the value is less than the target, we adjust the start pointer (`windowStart = windowMid + 1`) to narrow the search to the right half.
 * - If the value is greater than the target, we adjust the end pointer (`windowEnd = windowMid`) to narrow the search to the left half.
 * - If the pointers meet, we check if the target is smaller or greater than the element at the start index, and return the appropriate insertion index.
 * - The loop continues until the search space is narrowed down sufficiently.
 * 
 * Time Complexity:  O(log n) -  Binary search splits the search space in half with each iteration, leading to a time complexity of O(log n), where `n` is the number of elements in the input array
 * Space Complexity: O(1) - The algorithm only uses a constant amount of extra space, regardless of the input size.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let windowStart = 0,
        windowEnd = nums.length - 1,
        windowMid = Math.floor((windowStart + windowEnd) / 2),
        windowMidEle = nums[windowMid]

    while (true) {
        if (windowMidEle === target) return windowMid;
        if (windowStart === windowEnd) return nums[windowStart] > target ? windowStart : windowStart + 1;
        if (windowMidEle < target) windowStart = windowMid + 1; else windowEnd = windowMid;
        windowMid = Math.floor((windowStart + windowEnd) / 2)
        windowMidEle = nums[windowMid];
    }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // example # 1 : Expected Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // example # 2 : Expected Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // example # 3 : Expected Output: 4