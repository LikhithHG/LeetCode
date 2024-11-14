/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) 
{
    const MOD = 1e9 + 7;
    const freq = {};
    let nicePairs = 0;

    for (const num of nums) 
    {
        const revNum = parseInt(num.toString().split('').reverse().join(''), 10);
        const diff = num - revNum;

        if (freq[diff] !== undefined) 
            nicePairs = (nicePairs + freq[diff]) % MOD;

        freq[diff] = (freq[diff] || 0) + 1;
    }

    return nicePairs;    
};