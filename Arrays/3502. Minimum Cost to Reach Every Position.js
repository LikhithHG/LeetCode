/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) 
{
    let min = Infinity;
    let n = cost.length;
    let answer = Array(n).fill(0);

    for(let i = 0; i < n; i++)
    {
        min = Math.min(min, cost[i]);
        answer[i] = min;
    }    
    return answer;
};