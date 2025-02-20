/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) 
{
    let countStack = [];
    let stringStack = [];
    let currentString = '';
    let k = 0;

    for(let char of s)
    {
        if (!isNaN(char)) 
        { 
            // If it's a digit, construct the number k
            k = k * 10 + Number(char);
        }
        else if(char === '[')
        {
            // Push the current k and currentString to their respective stacks
            countStack.push(k);
            stringStack.push(currentString);
            // Reset currentString and k
            currentString = '';
            k = 0;
        }
        else if (char === ']') 
        {
            // Pop count from countStack
            let currentK = countStack.pop();
            // Pop the previous string from stringStack and repeat currentString k times
            let decodedString = stringStack.pop() + currentString.repeat(currentK);
            currentString = decodedString;
        } 
        else 
        {
            // Append regular characters to currentString
            currentString += char;
        }
    }
    return currentString;
};