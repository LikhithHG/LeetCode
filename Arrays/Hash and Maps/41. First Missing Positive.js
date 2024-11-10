/**
 * @param {number[]} nums
 * @return {number}
    https://www.youtube.com/watch?v=8g78yfzMlao&t=479s
 */
    var firstMissingPositive = function(nums) 
    {
        //The answer will be between 1 and len(nums) + 1
        let n = nums.length;
        for(let i = 0; i < n; i++)
        {
            if(nums[i] < 1 || nums[i] > n)
                nums[i] = 0;
        }
    
        //If value exits in array
        for(let i = 0; i < n; i++)
        {
            //index i = abs(nums[i]) - 1
            let value = Math.abs(nums[i]);
            //Check if the value is in between 1 and len(nums) i.e in bound
            if(1 <= value && value <= n)
            {
                //Mark the value if its positive else do not do anyhing
                if(nums[value - 1] > 0)
                    nums[value - 1] *= -1;
                
                //Edge case if value is 0 
                else if(nums[value - 1] === 0)
                    nums[value - 1] = -(n + 1);
            }   
        }
        for(let i = 1; i <= n; i++)
        {
            //check if it appears
            if(nums[i - 1] >= 0)
                return i;
        }
        return n + 1;
    };