/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) 
{
    let n = words.length;
    let count = 0;

    for(let i = 0; i < n; i++)
    {
        for(let j = i + 1; j < n; j++)
        {
            let word1 = words[i];
            let word2 = words[j];

            //if first string is large skip 
            if(word1.length > word2.length)
                continue;
            
            if(word2.startsWith(word1) && word2.endsWith(word1))
                count += 1;
        }
    }
    return count;
};