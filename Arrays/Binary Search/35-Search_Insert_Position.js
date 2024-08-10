/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) 
{
    let low = 0;
    let high = nums.length - 1;
    let mid;
    let tar = nums.length; //If the target is grater than the last element

    while(low <= high)
    {
        mid = Math.floor((low + high)/2);

        if(nums[mid] < target)
        {
            low = mid + 1;
        }
        else if(nums[mid] > target)
        {
            high = mid - 1;
            tar = mid;//If the target becomes exactly where to be inserted 
        }
        else
        {
            return mid;
        }
    }
    
    return tar;
};