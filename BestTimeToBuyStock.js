/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let left = Number.MAX_SAFE_INTEGER + 1;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < left) {
            left = prices[i]
        }

        if (prices[i] - left > maxProfit) {
            maxProfit = prices[i] - left
        }
    }

    return maxProfit
};