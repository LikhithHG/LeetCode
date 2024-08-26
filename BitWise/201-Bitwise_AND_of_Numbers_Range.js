/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 /*
 The key observation is that as you move from left to right, at some point, bits start changing from 0 to 1 or from 1 to 0. 
 The bits that change between any two consecutive numbers will be wiped out by the AND operation.

Thus, you need to find the common prefix of left and right in their binary representation. 
This prefix represents the bits that do not change across all numbers in the range.

To efficiently find this common prefix, we can keep right-shifting both left and right until they become equal, and count the number of shifts. 
Afterward, the result will be left << count, where count is the number of shifts.

The line return left << shift in the solution shifts the left value back to its original position after we have right-shifted both left and right to find the common prefix.
*/


var rangeBitwiseAnd = function(left, right) 
{
    let countShift = 0;
    while(left < right)
    {
        left >>= 1;
        right >>= 1;
        countShift += 1;
    }

    return left << countShift;
};