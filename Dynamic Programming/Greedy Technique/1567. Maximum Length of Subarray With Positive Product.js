/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) 
{
    let posLen = 0;
    let negLen = 0;
    let maxLen = 0;

    for(let num of nums)
    {
        if(num > 0)
        {
            posLen += 1;
            negLen = negLen > 0 ? negLen + 1 : 0;
        }
        else if(num < 0)
        {
            let temp = posLen;
            posLen = negLen > 0 ? negLen + 1 : 0;
            negLen = temp + 1;
        }
        else
        {
            posLen = 0;
            negLen = 0;
        }
        maxLen = Math.max(maxLen, posLen);
    }
    return maxLen;
};