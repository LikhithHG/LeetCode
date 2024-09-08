/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) 
{
    return Math.floor((high - low) / 2) + (low % 2 === 1 || high % 2 === 1 ? 1 : 0);
};

/*
let count = 0;
    for(let i = low; i <= high; i++)
    {
        if(i % 2 === 1)
            count += 1;
    }
    return count;
*/