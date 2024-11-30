/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) 
{
    //increasing window to right will always increase the sum since it is array of 0 and 1
    //when sum increase more than the goal then shift the left array
    //Count the number of sub arrays where curSum <= goal
    function helper(x)
    {
        if(x < 0)
            return 0;
        
        let res = 0;
        let left = 0;
        let current = 0;
        for(let right = 0; right < nums.length; right++)
        {
            current += nums[right];

            while(current > x)
            {
                current -= nums[left];
                left += 1;
            }
            res += right - left + 1;
        }
        return res;
    }

    return helper(goal) - helper(goal - 1);
};