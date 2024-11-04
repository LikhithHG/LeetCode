/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) 
{
    // Sort both arrays
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    // Check if the sorted arrays are equal
    for (let i = 0; i < target.length; i++) 
    {
        if (target[i] !== arr[i])
            return false;
    }

    return true;    
};