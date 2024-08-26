/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var checkSelfDividing = function(n)
{
    let num = i;
    while(num > 0)
    {
        let digit = num % 10;
        if(digit === 0 || i % digit !== 0)
            return false;
        num = Math.floor(num/10);
    }
    return true;
}

var selfDividingNumbers = function(left, right) 
{
    let output = [];
    for(i = left; i <= right; i++)
    {
        if(checkSelfDividing(i))
            output.push(i);
    }
    return output;
};