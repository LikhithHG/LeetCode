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
        /*
        The prefix sum at index i is the sum of all elements in the array from the start (0) up to the current index i. Let's call this prefixSum[i]. It represents the cumulative sum of the array up to that point.
        If we want to know if there is a subarray from some earlier index j+1 to i (i.e., subarray A[j+1] to A[i]) whose sum equals K, we can express the sum of this subarray as:
        Subarray sum from j+1 to i = prefixSum[i]−prefixSum[j]

        f the sum of the subarray from index j+1 to i is K, we get:
        prefixSum[i] − prefixSum[j] = K
        prefixSum[i] − K = prefixSum[j]
        */
        if(prefixMap.has(sum - k))
            count += prefixMap.get(sum - k);
        //Update the map with the current prefix sum
        prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
    }
    return count;
};