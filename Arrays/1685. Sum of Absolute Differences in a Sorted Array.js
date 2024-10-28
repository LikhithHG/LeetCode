/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) 
{
    const n = nums.length;
    const result = new Array(n).fill(0);

    // Calculate the total sum of all elements in nums
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < n; i++) 
    {
        // rightSum for the current index i
        const rightSum = totalSum - leftSum - nums[i];

        // Calculate result[i] using leftSum and rightSum
        //i * nums[i] represents the sum if every element to the left was equal to nums[i].
        //Therefore, (i * nums[i] - leftSum) gives the total absolute difference for all elements to the 
        //left of nums[i].
        result[i] = (i * nums[i] - leftSum) + (rightSum - (n - i - 1) * nums[i]);

        // Update leftSum to include nums[i]
        leftSum += nums[i];
    }

    return result;    
};