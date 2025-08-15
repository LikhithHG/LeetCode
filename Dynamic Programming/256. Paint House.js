/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) 
{
    if (costs.length === 0) 
        return 0;

    let previousRow = costs[costs.length - 1].slice(); // Clone the last row

    for (let n = costs.length - 2; n >= 0; n--) 
    {
        let currentRow = costs[n].slice(); // Clone the current row

        currentRow[0] += Math.min(previousRow[1], previousRow[2]); // Red
        currentRow[1] += Math.min(previousRow[0], previousRow[2]); // Green
        currentRow[2] += Math.min(previousRow[0], previousRow[1]); // Blue

        previousRow = currentRow;
    }

    return Math.min(previousRow[0], previousRow[1], previousRow[2]);
};