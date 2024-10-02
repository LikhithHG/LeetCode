/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) 
{
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let totalCost = 0;
    let i = 0;
    let j = costs.length - 1;
    
    while(i <= j)
    {
        totalCost += costs[i][0] + costs[j][1];
        i++;
        j--;
    }
    
    return totalCost;

};