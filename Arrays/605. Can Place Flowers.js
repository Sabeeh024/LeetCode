/**
 * Problem: Contains Duplicate
 *
 * Approach:
 * 
 * Time Complexity:
 * 
 * Space Complexity: 
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const ones = []

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) ones.push(i)
    }

    if (ones.length === 0) n -= Math.floor((flowerbed.length + 1) / 2);

    for (let i = 0; i < ones.length; i++) {
        if (i === 0 && ones[i] != 0) {
            const diff = ones[i]
            n -= Math.floor(diff / 2)
            if (i === ones.length - 1) {
                const diff = (flowerbed.length - 1) - ones[i]
                n -= Math.floor(diff / 2)
            }
        } else if (i === ones.length - 1 && ones[i] != flowerbed.length - 1) {
            const diff = (flowerbed.length - 1) - ones[i]
            n -= Math.floor(diff / 2)
        } else {
            if (i === ones.length - 1) continue;
            const diff = (ones[i + 1] - ones[i])
            n -= Math.floor((diff - 2) / 2)
            if ((i + 1) === ones.length - 1) continue;
        }
    }
    return n <= 0
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // example # 1 : Expected Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // example # 2 : Expected Output: false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // failed test # 1 :  Expected Output false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // failed test # 2 :  Expected Output true
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // failed test # 3 :  Expected Output true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)) // failed test # 4 :  Expected Output true




