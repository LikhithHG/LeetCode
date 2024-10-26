/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) 
{
    // Continue the loop until there is one or no stone left
    while (stones.length > 1) 
    {
        // Sort the stones in descending order
        stones.sort((a, b) => b - a);

        // Remove the two heaviest stones
        const stone1 = stones.shift();
        const stone2 = stones.shift();

        // If they are not equal, put the difference back into the list
        if (stone1 !== stone2) 
        {
            stones.push(stone1 - stone2);
        }
    }

    // Return the last remaining stone or 0 if none
    return stones.length === 1 ? stones[0] : 0;    
};