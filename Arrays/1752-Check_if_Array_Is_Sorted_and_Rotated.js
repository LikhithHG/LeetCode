/**
 * @param {number[]} nums
 * @return {boolean}
 Sorted Check: Traverse the array and check for the number of places where the order breaks 
 (i.e., the current element is greater than the next element).
Rotation Check: If the array has only one such "break" and the last element is smaller than the first element, the array is sorted and rotated.
 */
var check = function(nums) 
{
        let count = 0;
        let n = nums.length;

        for(let i = 0; i < n; i++)
        {
            if(nums[i] > nums[(i + 1) % n])
                count += 1;
            
            if(count > 1)
                return false;
        }

    return true;
};