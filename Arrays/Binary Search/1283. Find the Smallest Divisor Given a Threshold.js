/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) 
{
    let ans = -1;
    let low = 1;
    let high = Math.max(...nums);

    function divisionSum(divisor)
    {
        let result = 0;
        for(let num of nums)
            result += Math.ceil(num / divisor);
        return result;
    }

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        let result = divisionSum(mid);
        
        if(result <= threshold)
        {
            ans = mid;
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    return ans;
  
};