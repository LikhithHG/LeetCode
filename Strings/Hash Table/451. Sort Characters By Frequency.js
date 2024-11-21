/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) 
{
    const frequencyMap = {};
    for(let char of s)
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;

    //descending order
    let sorted = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    let result = '';
    for(let char of sorted)
        result += char.repeat(frequencyMap[char]);
    
    return result;
};