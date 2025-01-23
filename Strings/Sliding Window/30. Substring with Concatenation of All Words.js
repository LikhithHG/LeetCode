/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) 
{
    //If thee words is empty then return empty array
    if (words.length === 0) 
        return [];
    //Count the frequency of each word in the words array
    const wordCount = new Map();
    //The length of each word in the words array
    const wordLength = words[0].length;
    //The total length of the concatinated word
    const substringSize = words.length * wordLength;
    //Length of the string s
    const n = s.length;
    //array used to store the result
    const result = [];
    //calculate the frequency of each word
    for (let word of words) 
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    
    //Function of the sliding window
    const slidingWindow = function (left) 
    {
        //New map to sstore what all words encountered so far
        const wordsFound = new Map();
        //To keep track of number of words used
        let wordsUsed = 0;
        //To keep track if there are excess words
        let excessWord = false;
        for (let right = left; right <= n - wordLength; right += wordLength) 
        {
            //Extract the substring of length wordlength from s
            const sub = s.substring(right, right + wordLength);
            //If substring not in wordcount reset the sliding window
            if (!wordCount.has(sub)) 
            {
                //clear the new map of words
                wordsFound.clear();
                //reset the words used and excess word variable
                wordsUsed = 0;
                excessWord = false;
                //go to the next window
                left = right + wordLength;
            } 
            //If substring is found add words to new map wordsFound
            else 
            {
                //If the total length of the concatinated word is equal to window size or if the excessWord is true
                while (right - left === substringSize || excessWord) 
                {
                    /*
                        right - left === substringSize: The current window has reached the desired size (i.e., the combined length of all the words). Any further expansion would require sliding the left pointer forward to maintain the correct window size.
excessWord: A word in the window appears more times than required. The loop adjusts the window to remove extra occurrences of the word.
                    */

                    //extract the leftmost word as window is going to move
                    const leftmostWord = s.substring(left, left + wordLength);
                    //Move the window
                    left += wordLength;
                    //Decrease the count of the leftmostWord in the wordsFound map, as it is no longer part of the window.
                    wordsFound.set(leftmostWord, wordsFound.get(leftmostWord) - 1);
                    //If the count of leftmostWord in the window (wordsFound) is still greater than or equal to its required count (wordCount), the "excess word" condition is resolved (excessWord = false).
                    //Otherwise, the count of wordsUsed (valid words currently in the window) is decremented, as the window now contains one less valid word.
                    if(wordsFound.get(leftmostWord) >= wordCount.get(leftmostWord)) 
                        excessWord = false;
                
                    else 
                        wordsUsed--;
                }

                //set the words found
                wordsFound.set(sub, (wordsFound.get(sub) || 0) + 1);
                if (wordsFound.get(sub) <= wordCount.get(sub)) 
                    wordsUsed++;
                
                else 
                    excessWord = true;
        
                if (wordsUsed === words.length && !excessWord) 
                    result.push(left);
            }
        }
    };

    //Sliding windoe starts from 0 to the length of each word in words basically the alignment
    for (let i = 0; i < wordLength; i++) 
        slidingWindow(i);

    return result;    
};