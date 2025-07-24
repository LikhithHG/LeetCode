/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) 
{
    const ans = [];
    let i = 0;

    for (const num of target) 
    {
        while (i < num - 1) 
        {
            ans.push("Push");
            ans.push("Pop");
            i++;
        }

        ans.push("Push");
        i++;
    }

    return ans;    
};