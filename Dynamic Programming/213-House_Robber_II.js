/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) 
{
    if(nums.length === 0)
        return 0;
    
    if(nums.length === 1)
        return nums[0];
    
    var rob = function(start, end)
    {
        let prev1 = 0;
        let prev2 = 0;

        for(let i = start; i <= end; i++)
        {
            let current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
    
    let case1 = rob(1, nums.length - 1);
    let case2 = rob(0, nums.length - 2);
    return Math.max(case1, case2);
};