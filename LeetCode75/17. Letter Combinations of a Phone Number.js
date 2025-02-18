/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) 
{
    //Bruteforce
    let result = [];

    const digitMap = {
        "2":"abc",
        "3": "def", 
        "4": "ghi", 
        "5": "jkl", 
        "6": "mno",
        "7": "pqrs", 
        "8": "tuv", 
        "9": "wxyz"
    }
    function backTracking(index, currentString)
    {
        if(currentString.length === digits.length)
        {
            result.push(currentString);
            return;
        }

        let letters = digitMap[digits[index]];
        for(let i = 0; i < letters.length; i++)
            backTracking(index + 1, currentString + letters[i]);
    }
    if(digits)
        backTracking(0, "");
    
    return result;
};