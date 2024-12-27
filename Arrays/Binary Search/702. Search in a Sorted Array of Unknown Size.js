/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) 
{
    if (reader.get(0) === target) 
        return 0;
        
    // Find boundaries
    let left = 0, right = 1;
    while (reader.get(right) < target) 
    {
        left = right;
        right <<= 1;
    }
    //Now target is between left and right boundries
    // Binary search
    while (left <= right) 
    {
        const pivot = left + ((right - left) >> 1); //Made to confirm overflow does not occur
        const num = reader.get(pivot);
            
        if (num === target) 
            return pivot;

        if (num > target) 
            right = pivot - 1;
        else 
            left = pivot + 1;
    }
        
    return -1;
};