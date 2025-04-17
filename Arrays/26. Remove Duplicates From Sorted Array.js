/**
 * Problem: Remove Duplicates From Sorted Array
 *
 * Approach:
 * The input array is sorted, so we can use two pointers (i and j). 
 * Pointer i will represent the position of the last unique element in the array.
 * Pointer j will iterate through the array and check if each element is the same as the last unique element.
 * If it's the same, we simply skip it. If it's different, we update the position of i to hold the new unique element.
 * At the end of the loop, the first i+1 elements in the array will contain unique elements.
 * 
 * Time Complexity:
 * O(n), where n is the length of the array. We are iterating through the array once.
 * 
 * Space Complexity:
 * O(1), since we are modifying the array in place and using only a constant amount of extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = i + 1;
    if (nums.length === 1) return i + 1;
    while (true) {
        if (nums[i] === nums[j]) j++;
        else {
            i++;
            nums[i] = nums[j];
        }
        if (j >= nums.length) break;
    }

    return i + 1
};

removeDuplicates([1, 1, 2]); // example # 1 : Expected Output: 2
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // example # 2 : Expected Output: 5
removeDuplicates([1]); // Failed test case # 1 : Expected Output: 1
