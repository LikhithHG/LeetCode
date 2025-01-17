/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) 
{
    nums.sort((a, b) => a - b);
    let result = [];
    
    function backTrack(current)
    {
        if(current.length === nums.length)
        {
            result.push([...current]);
            return;
        }
        for(let i = 0; i < nums.length; i++)
        {
            if(used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
                continue;
            
            current.push(nums[i]);
            used[i] = true;

            backTrack(current);
            current.pop();
            used[i] = false;
        }
    }
    let used = Array(nums.length).fill(false);
    backTrack([]);
    return result;
};