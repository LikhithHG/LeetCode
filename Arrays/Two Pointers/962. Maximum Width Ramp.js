/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) 
{
    let n = nums.length;

    const rightMax = new Array(n);
    rightMax[n - 1] = nums[n - 1];

    for(let i = n - 2; i >= 0; i--)
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    
    // Step 3: Initialize pointers and the maxWidth variable
    let left = 0;
    let right = 0;
    let maxWidth = 0;

    while(right < n)
    {
        while(left < right && nums[left] > rightMax[right])
            left+= 1;
        maxWidth = Math.max(maxWidth, right - left);
        right += 1;
    }
    return maxWidth;
};