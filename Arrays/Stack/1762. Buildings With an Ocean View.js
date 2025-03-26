/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) 
{
    let stack = [];
    for(let i = heights.length - 1; i >= 0; i--)
    {
        if(i === heights.length - 1 || heights[i] > heights[stack[stack.length - 1]])
            stack.push(i);
    }
    return stack.reverse();
};