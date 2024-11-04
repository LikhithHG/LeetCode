/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) 
{
    // Create a frequency map for elements in arr1
    const frequencyMap = new Map();
    for (const num of arr1) 
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

    // Create the result array
    const result = [];

    // Place elements from arr2 into result based on frequency
    for (const num of arr2) 
    {
        if (frequencyMap.has(num)) 
        {
            const count = frequencyMap.get(num);
            for (let i = 0; i < count; i++)
                result.push(num);
            frequencyMap.delete(num); // Remove from map after placing
        }
    }

    // Collect remaining elements, sort them, and append to result
    const remainingElements = [];
    for (const [num, count] of frequencyMap.entries()) 
    {
        for (let i = 0; i < count; i++) 
            remainingElements.push(num);
    }
    remainingElements.sort((a, b) => a - b);
    result.push(...remainingElements);

    return result;
};