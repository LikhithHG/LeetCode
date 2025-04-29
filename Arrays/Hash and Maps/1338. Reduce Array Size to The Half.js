/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) 
{
    const freqMap = {};

    // Step 1: Count frequencies
    for(let num of arr)
        freqMap[num] = (freqMap[num] || 0) + 1;  

    //Step 2: Get Frequencies
    let frequencies = Object.values(freqMap);

    // Step 3: Sort frequencies in descending order
    frequencies.sort((a, b) => b - a);

    //Step 4: Pick Numbers
    let removed = 0;
    let setSize = 0;
    const half = Math.floor(arr.length / 2);

    for (const freq of frequencies) 
    {
        removed += freq;
        setSize += 1;
        if (removed >= half) 
            break;
    }

    return setSize;
};