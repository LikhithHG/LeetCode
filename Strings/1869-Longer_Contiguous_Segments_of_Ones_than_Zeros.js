/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) 
{
    let maxOnes = 0;
    let maxZeroes = 0;
    let CurrentOnes = 0;
    let CurrentZeroes = 0;

    for(let char of s)
    {
        if(char === '1')
        {
            CurrentOnes += 1;
            CurrentZeroes = 0;
        }
        else
        {
            CurrentZeroes += 1;
            CurrentOnes = 0;
        }

        maxOnes = Math.max(maxOnes, CurrentOnes);
        maxZeroes = Math.max(maxZeroes, CurrentZeroes);

    }

    return maxOnes > maxZeroes;
};