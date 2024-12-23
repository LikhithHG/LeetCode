/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) 
{
     // Sort the coins array
    coins.sort((a, b) => a - b);

    let currentSum = 0; // Largest consecutive sum reachable
    let addedCoins = 0; // Counter for coins added

    // Iterate through the sorted coins
    for (let coin of coins) {
        // Fill gaps until the current coin can be used
        while (currentSum + 1 < coin && currentSum < target) 
        {
            currentSum += currentSum + 1;
            addedCoins++;
        }

        // Use the current coin to extend the range
        if (currentSum >= target) 
            break;

        currentSum += coin;
    }

    // Fill remaining gaps if target is not reached
    while (currentSum < target) 
    {
        currentSum += currentSum + 1;
        addedCoins++;
    }

    return addedCoins;    
};