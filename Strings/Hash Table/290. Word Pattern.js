/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) 
{
    let wordToChar = new Map();
    let charToWord = new Map();
    let words = s.split(" ");

    if (words.length !== pattern.length)
        return false;

    for (let i = 0; i < words.length; i++) 
    {
        let c = pattern[i];
        let w = words[i];

        if (charToWord.has(c) && charToWord.get(c) !== w)
            return false;

        if (wordToChar.has(w) && wordToChar.get(w) !== c)
            return false;

        charToWord.set(c, w);
        wordToChar.set(w, c);
    }

    return true;
};