/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) 
{
    let possibleDups = 0;
    let length = arr.length - 1;

    // Step 1: Count how many zeros can be duplicated
    for (let left = 0; left <= length - possibleDups; left++) 
    {
        if (arr[left] === 0) 
        {
            // Edge case: Can't duplicate this zero fully
            if (left === length - possibleDups) 
            {
                arr[length] = 0; // Just set it and break
                length -= 1;
                break;
            }
            possibleDups++;
        }
    }

    // Step 2: Start from the end, move and duplicate zeros
    let last = length - possibleDups;

    for (let i = last; i >= 0; i--) 
    {
        if (arr[i] === 0) 
        {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } 
        else 
            arr[i + possibleDups] = arr[i];
    }
};