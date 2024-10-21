/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) 
{
    if(nums.length <= 1)
        return 0;
    let start = 0;
    let count = 0;
    let product = 1;

    for(let end = 0; end < nums.length; end++)
    {
        product *= nums[end];

        while(product >= k && start <= end)
        {
            product /= nums[start];
            start++;
        }
        count += end - start + 1;
    }
    return count;
};