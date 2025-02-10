/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) 
{
    //Count occurrences of each number
    const frequencyMap = new Map();
    for (let num of arr) 
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

    //Check for unique frequencies
    const frequencySet = new Set();
    for(let freq of frequencyMap.values())
    {
        if(frequencySet.has(freq))
            return false;
        frequencySet.add(freq);
    }
    return true;
};