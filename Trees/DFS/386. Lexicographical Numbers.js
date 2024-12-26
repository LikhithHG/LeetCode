/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) 
{
    let lexicographicalNumbers = [];
    let currentNumber = 1;

    for(let i = 0; i < n; i++)
    {
        lexicographicalNumbers.push(currentNumber);

        if(currentNumber * 10 <= n)
            currentNumber *= 10;
        
        else
        {
            while(currentNumber % 10 === 9 || currentNumber >= n)
                currentNumber = parseInt(currentNumber / 10);
            currentNumber += 1;
        }
    }
    return lexicographicalNumbers;
};