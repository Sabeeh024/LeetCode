/**
 * Problem: Roman to Integer
 *
 * Approach:
 *  - Use a mapping of Roman numerals to their corresponding integer values.
 *  - Traverse the input string from left to right.
 *  - For each character, check if the next two-character combination exists in the map (e.g., "IV", "IX").
 *    - If it does, add the value of the two-character numeral and move the index by 2.
 *    - Otherwise, add the value of the single character and move the index by 1.
 * 
 * Time Complexity: O(n) — where n is the length of the input string `s`
 * Space Complexity: O(1) — the map of Roman numerals is constant size
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0, i = 0;
    const roman_numerals = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000,
    }

    while (i < s.length) {
        console.log({ i, sum });
        if (roman_numerals[s[i]] >= roman_numerals[s[i + 1]]) {
            sum += roman_numerals[s[i]]
            i++;
        } else {
            sum += (i + 1) >= s.length ? roman_numerals[s[i]] : roman_numerals[s[i] + s[i + 1]] 
            i += 2;
        }
    }

    return sum
};

console.log(romanToInt("III")) // example # 1 : Expected Output: 3
console.log(romanToInt("LVIII")) // example # 2 : Expected Output: 58
console.log(romanToInt("MCMXCIV")) // example # 3 : Expected Output: 1994
console.log(romanToInt("DCXXI")); // failed test case # 1 : Expected output: 621
