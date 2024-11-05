/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) 
{
    for (let i = 0; i < arr.length - 2; i++) 
    {
        // Check if the current element and the next two are odd
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0)
            return true;
    }
    return false;
};