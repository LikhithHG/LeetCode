/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) 
{
    let left = 0;
    let right;
    for(right = 0; right < nums.length; right++)
    {
        //If the right encounters 0 reduce value of k
        if(nums[right] === 0)
            k--;
        
        //If k becomes negative then we have consumed all flips
        //So increment the left pointer
        if(k < 0)
        {
            //If left element is 0 we increase k by 1 
            //If left element is 1 we do not increase k but in both cases left is incremented   
            k += 1 - nums[left];
            left++;
        }
    }
    return right - left;
};