/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) 
{
    const result = [];
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for(let i = 0; i < n - 3; i++)
    {
        // Skip duplicates for the first number
        if(i > 0 && nums[i] === nums[i - 1])
            continue;
        
        for(let j = i + 1; j < n - 2; j++)
        {
            // Skip duplicates for the second number
            if(j > i + 1 && nums[j] === nums[j - 1])
                continue;

            let left = j + 1;
            let right = n - 1;
            
            while(left < right)
            {
                let currentSum = nums[i] + nums[j] + nums[left] + nums[right];

                if(currentSum === target)
                {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    // Skip duplicates for the other two numbers
                    while(left < right && nums[left] === nums[left + 1]) 
                        left += 1;
                    while(left < right && nums[right] === nums[right - 1]) 
                        right -= 1;
                    
                    left += 1;
                    right -= 1;
                }
                else if(currentSum < target)
                    left += 1;
                else
                    right -= 1;
            }
        }
    }
    return result;
};