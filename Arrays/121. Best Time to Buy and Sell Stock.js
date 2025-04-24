/**
 * Problem: Best Time to Buy and Sell Stock
 * 
 * Approach:
 * Iterate through the array while keeping track of the minimum price seen so far (`min`) and the maximum price since that minimum (`max`).
 * If a new minimum is found, compare the profit of the previous window (max - min) with the current max profit.
 * Finally, after the loop, compare one last time to ensure the maximum profit is returned.
 *
 * Time Complexity: O(n)
 * We iterate through the array once, where n is the number of elements in the prices array.
 *
 * Space Complexity: O(1)
 * We use only a constant amount of space for variables (`min`, `max`, `profit`).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], max = prices[0], profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            profit = Math.max(profit, max - min);
            min = prices[i]
            max = prices[i]
        } else max = Math.max(max, prices[i]);
    }
    profit = Math.max(profit, max - min);
    
    return profit
};

maxProfit([7, 1, 5, 3, 6, 4]); // example # 1 : Expected Output: 5
maxProfit([7, 6, 4, 3, 1]); // example # 2 : Expected Output: 0
maxProfit([1, 4, 2]) // Failed test cse # 1 : Expected Output: 3
maxProfit([3, 2, 6, 5, 0, 3]) // Failed test cse # 2 : Expected Output: 4
