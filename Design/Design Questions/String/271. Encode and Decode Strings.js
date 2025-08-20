/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) 
{
    return strs.join('\U0001f602');   
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) 
{
    return s.split('\U0001f602');    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */