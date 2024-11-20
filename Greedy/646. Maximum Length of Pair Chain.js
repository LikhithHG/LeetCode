/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) 
{
    //Sort the array based on the right value
    pairs.sort((a, b) => a[1] - b[1]);

    let currentEnd = -Infinity;
    let count = 0;

    for(let pair of pairs)
    {
        if(pair[0] > currentEnd) //c > b
        {
            currentEnd = pair[1];
            count += 1;
        }
    }
    return count;
};