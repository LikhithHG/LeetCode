/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) 
{
    // Count word frequencies
    const wordCounts = new Map();
    for (const word of words)
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);

    // Convert the map to an array of [word, count] pairs
    const candidates = Array.from(wordCounts.entries());

    // Sort candidates based on frequency and lexicographical order
    candidates.sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]); // Lexicographical order for words
        }
        return b[1] - a[1]; // Higher frequency first
    });

    // Extract the top k words
    return candidates.slice(0, k).map(pair => pair[0]);    
};