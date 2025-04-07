/**
 * Problem: Contains Duplicate
 *
 * Approach:
 * - We will use a HashMap (Map) to keep track of the numbers we have already seen while iterating throughi the array.
 * - For each number, we check if it already exists in the map.
 *     - If it exists, that means we have encountered a duplicate, so we return true.
 *     - If it doesn't exist, we add it to the map.
 * - If we finish iterating through the array without finding any duplicates, we return false.
 * 
 * Time Complexity: O(n) - We traverse the array once O(n), and each operation (checking if a key exists and setting a key) in the map takes constant time, O(1). O(n)×O(1)=O(n)
 * 
 * Space Complexity: O(n) : We use a map to store the elements we have seen. In the worst case, where there are no duplicates, we will store all n elements in the map.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i].toString())) return true; else map.set(nums[i].toString(), true)
    }

    return false
};

console.log(containsDuplicate([1, 2, 3, 1])) // example # 1 : Expected Output: true
console.log(containsDuplicate([1, 2, 3, 4])) // example # 2 : Expected Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // example # 3 : Expected Output: true