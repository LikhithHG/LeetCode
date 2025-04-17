/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) 
{
    let n = nums.length;
    let ans = Array(n).fill(0);

    let posIdx = 0;
    let negIdx = 1;

    for(let i = 0; i < n; i++)
    {
        if(nums[i] > 0)
        {
            ans[posIdx] = nums[i];
            posIdx += 2;
        }
        else
        {
            ans[negIdx] = nums[i];
            negIdx += 2;
        }
    }
    return ans;
};