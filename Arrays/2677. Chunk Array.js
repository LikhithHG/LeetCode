/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) 
{
     const result = [];
    
    for (let i = 0; i < arr.length; i += size)
        result.push(arr.slice(i, i + size));  // Slice out a chunk of length `size`
    
    return result;
};
