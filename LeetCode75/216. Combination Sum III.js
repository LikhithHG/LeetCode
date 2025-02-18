/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) 
{
    const result = [];
    
    function backtrack(start, target, path) 
    {
        // Base cases
        if (path.length === k) 
        {
            if (target === 0) 
                result.push([...path]); // Create a copy of path
            return;
        }
        if (target < 0) 
            return;
        
        // Try each possible number from start to 9
        for (let i = start; i <= 9; i++) 
        {
            path.push(i);
            backtrack(i + 1, target - i, path);
            path.pop(); // Backtrack by removing the last number
        }
    }
    
    backtrack(1, n, []);
    return result;    
};