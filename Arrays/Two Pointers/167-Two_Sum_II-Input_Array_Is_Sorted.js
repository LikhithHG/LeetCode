/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) 
{
    let left = 0;
    let right = numbers.length - 1;

    while(left < right)
    {
        let currentSum = numbers[left] + numbers[right];

        if(target === currentSum)
            return[left + 1, right + 1] //1-indexed array

        else if(target < currentSum)
            right -= 1;
        
        else
            left += 1;
    }
    return [];
};