/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) 
{
    if(num === 0)
        return true;

    //If number has trailing zeros then false else always true.
    //So check if number has trailing zeros using MOD function.

    return num % 10 !== 0;
};