/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) 
{
    candidates.sort((a, b) => a - b);
    const result = [];

    function backtrack(remaining, start, path)
    {
        if(remaining === 0)
        {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) 
        {
            if(i > start && candidates[i] === candidates[i - 1])
                continue;
            
            if(candidates[i] > remaining)
                break;

            path.push(candidates[i]);
            backtrack(remaining - candidates[i], i + 1, path);
            path.pop();
        }
    }

    backtrack(target, 0, []);
    return result;
};