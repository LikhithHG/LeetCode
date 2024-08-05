/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    buyPrice = prices[0]
    profit = 0

    for(let i = 1; i < prices.length; i++)
    {
        if(prices[i] < buyPrice)
            buyPrice = prices[i]

        profit = Math.max(profit, prices[i] - buyPrice)
    }    
    return profit
};