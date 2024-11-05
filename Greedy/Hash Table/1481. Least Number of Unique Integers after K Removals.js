/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) 
{
    let freqMap = new Map();
    for(let num of arr)
        freqMap.set(num, (freqMap.get(num) || 0) + 1);

    let frequencies = Array.from(freqMap.values()).sort((a, b) => a - b);
    let uniqueCount = frequencies.length;
    
    for(let freq of frequencies)
    {
        if(k >= freq)
        {
            k -= freq;
            uniqueCount--;
        }
        else
            break;
    }
    return uniqueCount;
};