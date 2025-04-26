/**
 * Problem: Can Place Flowers
 *
 * Approach:
 * - Iterate through the flowerbed.
 * - For each empty plot (0), check if both adjacent plots are also empty or out of bounds.
 * - If so, plant a flower there (set to 1) and decrement `n`.
 * - Skip the next plot since adjacent planting is not allowed.
 * - Early return if `n` reaches 0 before the end of the loop.
 *
 * Time Complexity: O(n)
 * - We traverse the array once, doing constant-time checks and updates per element.
 *
 * Space Complexity: O(1)
 * - We do everything in-place and use only a few extra variables.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let i = 0;
    const len = flowerbed.length;

    while (i < len) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === len - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
            i += 2;
        } else {
            i++;
        }
    }

    return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // example # 1 : Expected Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // example # 2 : Expected Output: false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // failed test # 1 :  Expected Output false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // failed test # 2 :  Expected Output true
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // failed test # 3 :  Expected Output true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)) // failed test # 4 :  Expected Output true




