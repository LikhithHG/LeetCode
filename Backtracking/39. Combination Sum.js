/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) 
{
    function backtrack(remaining, start, path)
    {
        if(remaining < 0)
            return;
        
        if(remaining === 0)
        {
            combinations.push([...path]);
            return;
        }
        for(let i = start; i < candidates.length; i++)
        {
            path.push(candidates[i]);
            backtrack(remaining - candidates[i], i, path);
            path.pop();
        }
    }
    const combinations = [];
    backtrack(target, 0, []);
    return combinations;
};