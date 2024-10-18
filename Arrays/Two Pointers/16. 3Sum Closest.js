/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) 
{
    nums.sort((a,b) => a - b);
    let closestSum = Infinity;
    let n = nums.length;

    for(let i = 0; i < n; i++)
    {
        let left = i + 1;
        let right = n - 1;
        while(left < right)
        {
            let currentSum = nums[i] + nums[left] + nums[right];
            if(Math.abs(currentSum - target) < Math.abs(closestSum - target))
                closestSum = currentSum;

            if(currentSum < target)
                left += 1;
            else if(currentSum > target)
                right -= 1;
            //if exactly equal to the targer
            else
                return currentSum;
        }
    }
    return closestSum;
};