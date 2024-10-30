/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) 
{
    const freq = {};
    nums.forEach(num => freq[num] = (freq[num] || 0) + 1);

    nums.sort((a,b) => {
        if(freq[a] === freq[b])
            return b - a;
        return freq[a] - freq[b];
    })

    return nums;
};