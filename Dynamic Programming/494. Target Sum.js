/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) 
{
    // Base case: we start with the sum 0 and one way to achieve it.
    let dp = new Map();
    dp.set(0, 1);

    for(let num of nums)
    {
        // Temporary map to store new dp states for the current iteration
        let nextDp = new Map();

        // For every possible sum in dp, add and subtract the current number
        for (let [sum, count] of dp) 
        {
            // Add current number to sum
            nextDp.set(sum + num, (nextDp.get(sum + num) || 0) + count);

            // Subtract current number from sum
            nextDp.set(sum - num, (nextDp.get(sum - num) || 0) + count);
        }

        // Move to the next iteration by updating dp with the new states
        dp = nextDp;
    }    

    //Return the target map
    return dp.get(target) || 0;
};