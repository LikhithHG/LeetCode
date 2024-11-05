/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) 
{
    let i = num.length - 1;
    let result = [];
    
    while (i >= 0 || k > 0) 
    {
        if (i >= 0) 
        {
            k += num[i];
            i--;
        }
        result.push(k % 10);  // Get the last digit of the sum
        k = Math.floor(k / 10);  // Remove the last digit from K (carry management)
    }
    
    return result.reverse(); 
};