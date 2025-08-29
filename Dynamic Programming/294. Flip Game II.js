/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function(currentState) 
{
    const len = currentState.length;

    for(let i = 0; i < len - 1; i++)
    {
        // I have a move 
        if(currentState[i] === "+" && currentState[i+1] === "+")
        {
            // My oponent who goes next , doesnt have a move
            if(!(canWin(currentState.slice(0,i) + "--" + currentState.slice(i + 2))))
                return true
        }
        
    }
    return false 
};