/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) 
{
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while(left < right)
    {
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]) * width;

        maxArea = Math.max(maxArea, currentArea);

        if(height[left] < height[right])
            left += 1;

        else
            right -= 1;

    }

    return maxArea;
};