/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) 
{
    let low = 1;
    let high = nums.length - 1;

    while(low < high)
    {
        let mid = Math.floor((low + high) / 2);

        let count = 0;
        for(let num of nums)
        {
            if(num <= mid)
                count += 1;
        }

        if(count > mid)
            high = mid;
        else
            low = mid + 1;
        
    }
    return low;
};