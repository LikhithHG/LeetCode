/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) 
{
    let hashMap = new Map();

    //Create a hash value for each string and group them by hash value
    for(let string of strings)
    {
        let hashKey = getHash(string);
        if(!hashMap.has(hashKey))
            hashMap.set(hashKey, []);
        
        hashMap.get(hashKey).push(string);
    }
    // Convert map values to a list of groups
    return Array.from(hashMap.values());
};

var getHash = function(string)
{
    let chars = string.split('');
    let hashKey = '';

    for(let i = 1; i < chars.length; i++)
    {
        let diff = (chars[i].charCodeAt(0) - chars[i - 1].charCodeAt(0) + 26) % 26;
        hashKey += String.fromCharCode(diff + 'a'.charCodeAt(0));
    }

    return hashKey;
}