/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) 
{
    const covered = new Array(right + 1).fill(false);
    
    // Mark ranges as covered
    for (const [start, end] of ranges) 
    {
        for (let i = Math.max(start, left); i <= Math.min(end, right); i++) 
        {
            covered[i] = true;
        }
    }
    
    // Check if all numbers from left to right are covered
    for (let i = left; i <= right; i++) 
    {
        if (!covered[i]) 
        {
            return false;
        }
    }
    
    return true;    
};