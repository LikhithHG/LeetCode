/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) 
{
    let result = [...nums];

    for(let num of nums)
    {
        let reversed = parseInt(num.toString().split('').reverse().join(''));
        result.push(reversed);
    }    
    let unique = new Set(result);
    return unique.size;
};