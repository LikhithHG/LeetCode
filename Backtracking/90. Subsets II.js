/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) 
{
    //Sort the array before
    nums.sort((a, b) => a - b);
    const result = [];
    const currentSubset = [];

    function backtrack(start, currentSubset) 
    {
        //Add the subset formed so far to the subset list result
        result.push([...currentSubset]); 
        for (let i = start; i < nums.length; i++) 
        {
            if(i !== start && nums[i] === nums[i - 1])
                continue;
            
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    backtrack(0, []);
    return result;
};