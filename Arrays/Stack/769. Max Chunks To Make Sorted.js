/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) 
{
    let n = arr.length;
    let chunks = 0;
    let maxElement = 0;

    for(let i = 0; i < n; i++)
    {
        maxElement = Math.max(maxElement, arr[i]);
        if(maxElement === i)
            chunks++;
    }
    return chunks;
};