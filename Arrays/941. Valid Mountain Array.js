/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) 
{
    if (arr.length < 3) 
        return false;
    
    let i = 0;
    
    // Walk up
    while (i + 1 < arr.length && arr[i] < arr[i + 1])
        i++;
    
    // Peak can't be the first or last element
    if (i === 0 || i === arr.length - 1) 
        return false;
    
    // Walk down
    while (i + 1 < arr.length && arr[i] > arr[i + 1])
        i++;
    
    return i === arr.length - 1;
};