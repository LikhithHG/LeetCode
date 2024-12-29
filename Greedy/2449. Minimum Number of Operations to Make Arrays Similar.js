/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) 
{
    // Separate nums and target into odd and even arrays
    const numsOdd = nums.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    const numsEven = nums.filter(x => x % 2 === 0).sort((a, b) => a - b);
    const targetOdd = target.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    const targetEven = target.filter(x => x % 2 === 0).sort((a, b) => a - b);

    // Function to calculate the total operations required for a group
    const calculateOperations = (arr1, arr2) => {
        let operations = 0;
        for (let i = 0; i < arr1.length; i++) 
            operations += Math.abs(arr1[i] - arr2[i]) / 2;
        
        return operations;
    };

    // Calculate operations for odd and even groups
    const oddOperations = calculateOperations(numsOdd, targetOdd);
    const evenOperations = calculateOperations(numsEven, targetEven);

    // Return the total number of operations
    return (oddOperations + evenOperations) / 2;    
};