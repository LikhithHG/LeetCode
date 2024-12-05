/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) 
{
    let result = [];
    
    function backTrack(current)
    {
        if(current.length === nums.length)
        {
            result.push([...current]);
            return;
        }
        for(let num of nums)
        {
            if(!current.includes(num))
            {
                current.push(num);
                backTrack(current);
                current.pop();
            }
        }
    }
    backTrack([]);
    return result;
};