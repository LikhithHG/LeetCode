/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) 
{
    //Initialize the reverse number to 0
    let reversed = 0;

    //Loop runs for 32 because its given its a 32 bit unsigned integer so 0 to 31
    for(i = 0; i < 32; i++)
    {
        // Finding out the last bit of n using bitwise AND operator -- Masking Technique
        let bit = n & 1;

        //Append the bit we got to reversed bit using left shift of 1 and bitwise OR operator
        reversed = (reversed << 1) | bit;

        //Now shift the n bitwise to right by 1
        n = n >> 1;
    }

    //Return the value of reversed and its an unsigned integer so use >>> 0
    return reversed >>> 0;
};