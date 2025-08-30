/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) 
{
    let i1 = -1, i2 = -1;
    let minDistance = wordsDict.length;

    for (let i = 0; i < wordsDict.length; i++) 
    {
        if (wordsDict[i] === word1) 
            i1 = i;
        else if (wordsDict[i] === word2) 
            i2 = i;
        

        if (i1 !== -1 && i2 !== -1) 
            minDistance = Math.min(minDistance, Math.abs(i1 - i2));
    }

    return minDistance;
};