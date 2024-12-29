/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minOperations = function(nums, x, y) 
{
    let left = 1;
    let right = Math.ceil(Math.max(...nums) / y);
    let mid = right;
  
    const diff = x - y;
  
    while (left < right) 
    {
        mid = left + right >> 1;
    
        let remain = mid;
    
        for (let i = 0; i < nums.length; i += 1) 
        {
            if (nums[i] > mid * y) 
                remain -= Math.ceil((nums[i] - mid * y) / diff);

            if (remain < 0) 
                break;
        }
    
        if (remain < 0) 
            left = mid + 1;
        
        else 
            right = mid;
    }
    return right; 
};