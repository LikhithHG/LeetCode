/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) 
{
    // Convert the number to an array of digits
    let digits = num.toString().split('').map(Number);
    let n = digits.length;
    
    // Track the rightmost max digit and its index
    let maxIndex = n - 1;
    let leftIndex = -1;
    let rightIndex = -1;

    // Traverse from right to left to find the indices to swap
    for (let i = n - 2; i >= 0; i--) 
    {
        if (digits[i] < digits[maxIndex]) 
        {
            leftIndex = i;
            rightIndex = maxIndex;
        } 
        else if (digits[i] > digits[maxIndex])
            maxIndex = i;
    }

    // Perform the swap if a valid pair was found
    if (leftIndex !== -1) 
        [digits[leftIndex], digits[rightIndex]] = [digits[rightIndex], digits[leftIndex]];

    // Convert back to a number and return
    return parseInt(digits.join(''), 10);
};