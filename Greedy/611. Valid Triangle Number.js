/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) 
{
    nums.sort((a, b) => a - b);
    let count  = 0;
    //Use two pointers by fixing one pointer at a time
    for(let k = nums.length - 1;k >= 0; k--)
    {
        let i = 0;
        let j = k - 1;
        while(i < j)
        {
            if(nums[i] + nums[j] > nums[k])
            {
                //If so all paitrs between i and j will satisy
                count += j - i;
                j--;
            }
            else
                i++;
        }
    }
    return count;
};