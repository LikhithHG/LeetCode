/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) 
{
    let count = 0;
    let sum = 0;
    let prefixMap = new Map();

    prefixMap.set(0, 1) //Sum 0 occured at once
    for(let num of nums)
    {
        sum += num;//prefix sum
        //
        if(prefixMap.has(sum - k))
            count += prefixMap.get(sum - k);
        //Update the map with the current prefix sum
        prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
    }
    return count;
};