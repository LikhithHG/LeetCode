/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) 
{
    let xor = start ^ goal;

    let count = 0;
    while(xor != 0)
    {
        xor = xor & (xor - 1);
        count += 1;
    }    
    return count;
};