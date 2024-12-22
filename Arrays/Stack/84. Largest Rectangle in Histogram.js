/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) 
{
    let stack = [-1];
    let maxArea = 0;
    for(let i = 0; i < heights.length; i++)
    {
        while(stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) 
        {
            let currentHeight = heights[stack.pop()];
            let currentWidth = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, currentHeight * currentWidth);
        }
        stack.push(i);
    }
    //If all the elements are pushed into stack we need to pop elements from stack and calculate
    while(stack[stack.length - 1] !== -1) 
    {
        let currentHeight = heights[stack.pop()];
        let currentWidth = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, currentHeight * currentWidth);
    }
    return maxArea;
};