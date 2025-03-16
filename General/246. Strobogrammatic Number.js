/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) 
{
    let rotatedDigits = new Map([
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']
    ]);

    for(let left = 0, right = num.length - 1; left <= right; left++, right--)
    {
        let leftChar = num[left];
        let rightChar = num[right];
        if(!rotatedDigits.has(leftChar) || rotatedDigits.get(leftChar) !== rightChar)
            return false;
    }
    return true;
};