/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) 
{
    let jewelSet = new Set();
    for(let char of jewels)
        jewelSet.add(char);
    
    let count = 0;
    for(let char of stones)
    {
        if(jewelSet.has(char))
            count += 1;
    }
    return count;
};