/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) 
{
    //Suppose miss is the smallest missing number, then we know that [1, miss) (left-closed, right-open) is already covered . In order to cover miss, we have to add something smaller than or equal to miss. Otherwise, there is no way we can cover it.
    let patches = 0;
    let i = 0;
    let miss = 1;

    while(miss <= n)
    {
        if(i < nums.length && nums[i] <= miss)//Miss is covered
            miss += nums[i++];
        
        else //Miss is not covered and we need to patch this
        {
            miss += miss;
            patches++;
        }
    }
    return patches;
};