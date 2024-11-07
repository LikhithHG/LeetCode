/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) 
{
    let n = arr.length;
    let maxLength = 0;
    let up = 0;
    let down = 0;

    for(let i = 1; i < n; i++)
    {
        if((down > 0 && arr[i] > arr[i - 1]) || arr[i] === arr[i - 1])
        {
            down = 0;
            up = 0;
        }
        if(arr[i] > arr[i - 1])
            up += 1;
        if(arr[i] < arr[i - 1])
            down += 1;
        
        if(up > 0 && down > 0)
            maxLength = Math.max(maxLength , up + down + 1);
    }    
    return maxLength;
};