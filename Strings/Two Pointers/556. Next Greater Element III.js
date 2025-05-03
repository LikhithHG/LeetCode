/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) 
{
    let a = n.toString().split('');
    let i = a.length - 2;

    // Step 1: Find first decreasing digit from the right
    while (i >= 0 && a[i + 1] <= a[i]) 
        i--;

    if (i < 0) 
        return -1;

    // Step 2: Find the digit just larger than a[i]
    let j = a.length - 1;
    while (j >= 0 && a[j] <= a[i]) 
        j--;

    // Step 3: Swap a[i] and a[j]
    [a[i], a[j]] = [a[j], a[i]];

    // Step 4: Reverse the subarray from i + 1 to end
    let left = i + 1, right = a.length - 1;
    while (left < right) 
    {
        [a[left], a[right]] = [a[right], a[left]];
        left++;
        right--;
    }

    let result = parseInt(a.join(''));
    
    // Step 5: Check for 32-bit integer overflow
    return result <= 0x7FFFFFFF ? result : -1;
};