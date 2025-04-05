/**
 * Problem: Two Sum
 * 
 * Approach:
 * - Sum = a + b, for each number in the array, calculate its complement by subtracting it from the target (complement = target - currentNumber).
 * - Use a hash map to store previously visited numbers. If the complement exists in the map, we've found a pair that sums to the target.
 * 
 * Time complexity: O(n), as we iterate through the array once, and each lookup in the hash map is O(1).
 * Space complexity: O(n), for storing the numbers in the hash map.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    console.log(`Input: `, { nums, target })

    const visitedElements = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (visitedElements.has(complement)) return [visitedElements.get(complement), i];
        visitedElements.set(nums[i], i);
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // example # 1 : Expected Output: [ 1, 0 ]
console.log(twoSum([3, 2, 4], 6)); // example # 2 : Expected Output: [ 2, 1 ]
console.log(twoSum([3, 3], 6)); // example # 3 : Expected Output: [ 1, 0 ]
console.log(twoSum([-3, 4, 3, 90], 0)); // Failed test case # 1 : Expected Output: [ 0, 2 ]
console.log(twoSum([3, 2, 95, 4, -3], 92)); // Failed test case # 2 : Expected Output: [ 2, 4 ]