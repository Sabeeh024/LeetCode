/**
 * Problem: Maximum Subarray
 *
 * Approach:
 * This solution uses Kadane's Algorithm. The idea is to iterate through the array while maintaining
 * the current subarray sum (`currSum`) and updating the maximum subarray sum found so far (`maxSum`).
 * At each step, we decide whether to continue with the current subarray or start a new subarray at
 * the current element, depending on which is greater. This ensures that we always have the optimal 
 * subarray sum ending at the current position.
 *
 * Time Complexity: O(n)
 * We iterate through the array once, performing constant-time operations at each step.
 *
 * Space Complexity: O(1)
 * We use only a constant amount of extra space for variables like `currSum` and `maxSum`.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currSum = nums[0], maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i])
        maxSum = Math.max(maxSum, currSum)
    }
    
    return maxSum
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // example # 1 : Expected Output: 6
maxSubArray([1]); // example # 2 : Expected Output: 1
maxSubArray([5, 4, -1, 7, 8]); // example # 3 : Expected Output: 23
maxSubArray([-1]); // Failed test case # 1 : Expected Output: -1
maxSubArray([-2, -1]); // Failed test case # 2 : Expected Output: -1
maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]) // Failed test case # 3 : Expected Output: 6
maxSubArray([8, -19, 5, -4, 20]) // Failed test case # 3 : Expected Output: 21
maxSubArray([3, -2, -3, -3, 1, 3, 0]) // Failed test case # 3 : Expected Output: 4
