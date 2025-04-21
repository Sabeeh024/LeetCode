/**
 * Problem: Maximum Subarray
 *
 * Approach:
 *
 * Time Complexity:
 * 
 * Space Complexity: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0, maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        for (let sl = 0; sl < nums.length - i; sl++) {
            sum += nums[i + sl]
            if (sum > maxSum) maxSum = sum
        }
        sum = 0
    }
    console.log(maxSum);
    
    return maxSum
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // example # 1 : Expected Output: 6
maxSubArray([1]); // example # 2 : Expected Output: 1
maxSubArray([5, 4, -1, 7, 8]); // example # 3 : Expected Output: 23
maxSubArray([-1]); // example # 3 : Expected Output: -1