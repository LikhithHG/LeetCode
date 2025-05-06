/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) 
{
    const n = security.length;
    if(time === 0)
        return [...Array(n).keys()];
    
    let nonIncreasing = Array(n).fill(0);
    let nonDecreasing = Array(n).fill(0);

    //Increasing
    for(let i = 1; i < n; i++)
    {
        if(security[i] <= security[i - 1])
            nonIncreasing[i] = nonIncreasing[i - 1] + 1;
        else
            nonIncreasing[i] = 0;
    }

    //Decreasing
    for(let i = n - 2; i >= 0; i--)
    {
        if(security[i] <= security[i + 1])
            nonDecreasing[i] = nonDecreasing[i + 1] + 1;
        else
            nonIncreasing[i] = 0;
    }

    const result = [];
    for (let i = time; i < n - time; i++) 
    {
        if (nonIncreasing[i] >= time && nonDecreasing[i] >= time) 
            result.push(i);
    }

    return result;
};