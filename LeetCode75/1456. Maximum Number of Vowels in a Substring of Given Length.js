/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) 
{
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentCount = 0;

    //Calculate the vowels for the first window
    for(let i = 0; i < k; i++)
    {
        if(vowels.has(s[i]))
            currentCount += 1;
    }
    let maxCount = currentCount;

    //calculate from kth element
    for(let i = k; i < s.length; i++)
    {
        //Check if the last character in the previous window is a vowel then substract it from the current Count 
        if(vowels.has(s[i - k]))
            currentCount -= 1;
        
        //Check if the first character in the current window is a vowel then add it from the current Count 
        if(vowels.has(s[i]))
            currentCount += 1;

        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
};