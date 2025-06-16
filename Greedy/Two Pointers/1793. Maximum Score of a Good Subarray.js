/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) 
{
    let n = nums.length;
    let left = k;
    let right = k;
    let ans = nums[k];
    let currMin = nums[k];
        
    while (left > 0 || right < n - 1) 
    {
        if ((left > 0 ? nums[left - 1]: 0) < (right < n - 1 ? nums[right + 1] : 0)) 
        {
            right++;
            currMin = Math.min(currMin, nums[right]);
        } 
        else 
        {
            left--;
            currMin = Math.min(currMin, nums[left]);
        }
            
        ans = Math.max(ans, currMin * (right - left + 1));
    }
        
    return ans;
};