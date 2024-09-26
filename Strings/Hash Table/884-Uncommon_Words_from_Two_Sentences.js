/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) 
{
    //Combine two strings into a single
    let combined = s1 + " " + s2;

    //split the combined stings using space
    let words = combined.split(" ");

    //Create hash table
    let wordCount = {};

    //count the occurances of each word
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    })

    //return the word that has only one occurance
    return Object.keys(wordCount).filter(word => wordCount[word] === 1);
};