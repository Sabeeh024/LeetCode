/**
 * Problem: Plus One
 * 
 * Approach:
 * - Start from the end of the array (least significant digit).
 * - Add 1 to the current digit.
 * - If the result is less than 10, we're done.
 * - If it's 10, set the digit to 0 and carry over 1 to the next digit.
 * - Continue until there's no carry or we reach the beginning of the array.
 * - If there's still a carry after the loop, add a 1 to the front of the array.
 *
 * Time Complexity: O(n)
 * - We may need to visit each digit once in the worst case (e.g., [9,9,9]).
 *
 * Space Complexity: O(1)
 * - The operation is done in-place with constant extra space (excluding the input/output).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var plusOne = function (digits) {
    let carry = 1, i = digits.length - 1;

    while (carry === 1 && i >= 0) {
        digits[i] = digits[i] === 9 ? 0 : digits[i] + 1
        
        if (digits[i] !== 0) carry = 0;
        i--;
    }
    if (carry === 1) digits.unshift(1)

    return digits
};

plusOne([1, 2, 3]); // example # 1 : Expected Output: [1,2,4]
plusOne([4, 3, 2, 1]); // example # 2 : Expected Output: [4,3,2,2]
plusOne([9]); // example # 3 : Expected Output: [1,0]
