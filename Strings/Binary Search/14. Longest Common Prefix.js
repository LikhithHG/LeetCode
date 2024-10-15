/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) 
{
    if(strs.length === 0)
        return "";

    let minLen = Math.min(...strs.map(str => str.length));

    let low = 0;
    let high = minLen;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        if(commonPrefix(strs, mid))
            low = mid + 1;
        else
            high = mid - 1;

    }
    return strs[0].substring(0, high);
};
var commonPrefix = function(strs, len)
{
    const prefix = strs[0].substring(0, len);
    for(let i = 1; i < strs.length; i++)
    {
        if(!strs[i].startsWith(prefix))
            return false;
    }
    return true;
}