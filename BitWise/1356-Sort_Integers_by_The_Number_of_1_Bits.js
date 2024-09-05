/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) 
{
  const countBits = num => {
        let count = 0;
        while (num > 0) {
            num &= (num - 1); // Remove the rightmost 1 bit
            count++;
        }
        return count;
    };

    return arr.sort((a, b) => {
        // Count number of 1 bits for each number
        const bitsA = countBits(a);
        const bitsB = countBits(b);
        
        if (bitsA === bitsB) {
            return a - b; // If number of 1 bits is the same, sort by value
        }
        return bitsA - bitsB; // Otherwise, sort by number of 1 bits
    });
};