/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) 
{
    //Sort the array
    nums.sort((a, b) => a - b);
    let result = 0;
    let current = 1;
    let count = 0;

    for(let num of nums)
    {
        while(current < num && count < k)
        {
            result += current;
            count += 1;
            current += 1;
        }
        current = num + 1;
    }
    //If count is still below k
    while(count < k)
    {
        result += current;
        count += 1;
        current += 1;
    }
    return result;
};