/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) 
{
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    /*
    maxNum - minNum:
    This calculates the difference between the largest number (maxNum) and the smallest number (minNum) in   the array. It represents the original range of the array before any operations are performed.
    
    2 * k:
    Since you're allowed to increase or decrease any number by up to k, the total amount of adjustment between the largest and smallest numbers can be as much as 2 * k (you can lower the max by k and raise the min by k).
    Thus, 2 * k represents how much you can "shrink" the range between the largest and smallest numbers.
    */
    return Math.max(0, (max - min) - 2 * k);
};