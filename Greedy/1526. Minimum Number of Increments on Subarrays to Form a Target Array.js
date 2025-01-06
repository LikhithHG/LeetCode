/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) 
{
    let operations = target[0]; // Initial operations to make the first element of the target element
    //If the current element is greater than the previous element, you need additional increments equal to the difference.
    //If the current element is less than or equal to the previous element, no extra operations are needed for that step.
    for (let i = 1; i < target.length; i++) 
    {
        if (target[i] > target[i - 1])
            operations += target[i] - target[i - 1];
    }
    return operations;    
};