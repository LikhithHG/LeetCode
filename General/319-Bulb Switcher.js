/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) 
{
    //The key insight here is to recognize that a bulb will only remain on if it is toggled an odd number of    times. A bulb is toggled in rounds corresponding to its divisors.
    return Math.floor(Math.sqrt(n));
};