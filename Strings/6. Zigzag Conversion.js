/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) 
{
    //Algo will be (numRows - 1)*2 - 2*row
    if(numRows === 1)
        return s;
    
    let res = "";
    for(let i = 0; i < numRows; i++)
    {
        let increment = (numRows - 1) * 2;
        for(let j = i; j < s.length; j += increment)
        {
            res += s[j];
            if(i > 0 && i < numRows - 1 && j + increment - 2 * i < s.length)
                res += s[j + increment - 2 * i];
        }
    }
    return res;
};