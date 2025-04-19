/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) 
{
    let whitePos = 0;
    let totalSwaps = 0;

    for(let currentPos = 0; currentPos < s.length; currentPos++)
    {
        if(s[currentPos] === '0')
        {
            totalSwaps += currentPos - whitePos;
            whitePos++;
        }
    }    
    return totalSwaps;
};