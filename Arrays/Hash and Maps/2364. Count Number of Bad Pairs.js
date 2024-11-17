/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) 
{
    const n = nums.length;
    let diffCount = new Map();
    let goodPairs = 0;

    for(let i = 0; i < n; i++)
    {
        let diff = nums[i] - i;
        if(diffCount.has(diff))
        {
            goodPairs += diffCount.get(diff); // Increment good pairs by previous occurrences
            diffCount.set(diff, diffCount.get(diff) + 1);
        }
        else
            diffCount.set(diff, 1);
    }
    // Total pairs = n * (n - 1) / 2
    const totalPairs = (n * (n - 1)) / 2;
    const badPairs = totalPairs - goodPairs;

    return badPairs;
};