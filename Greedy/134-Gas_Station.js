/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) 
{
    let totalGas = 0;
    let totalCost = 0;
    let start = 0;
    let currentTank = 0;

    for(let i = 0; i < gas.length; i++)
    {
        totalGas += gas[i];
        totalCost += cost[i];
        currentTank += gas[i] - cost[i];

        if(currentTank < 0)
        {
            start = i + 1;
            currentTank = 0;
        }
    }
    if(totalGas >= totalCost)
        return start;
    else 
        return -1;
};