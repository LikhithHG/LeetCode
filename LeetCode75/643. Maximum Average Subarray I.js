/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) 
{
    //Sum of the first sliding window
    let sum = 0;
    for(let i = 0; i < k; i++)
        sum += nums[i];

    //Assign this sum to maxSum
    let maxSum = sum;

    //Start the sliding window
    let start = 0;
    let end = k;

    //While loop until end of array i.e end index value is the last index of array nums
    while(end < nums.length)
    {
        //remove the previous element so we will substract the removed element from sum
        sum -= nums[start];
        //increment the start by 1 to move to next slide
        start += 1;

        //We need to add the new element to the sum
        sum += nums[end];
        //Increment the end by one
        end += 1;

        //Update the maxsum
        maxSum = Math.max(maxSum, sum);
    }
    //Return average of maxSum
    return maxSum/k;
};