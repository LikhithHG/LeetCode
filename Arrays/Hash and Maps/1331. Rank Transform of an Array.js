/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) 
{
    // If the array is empty, return an empty array
    if (arr.length === 0) return [];

    // Create a sorted array of unique elements
    const sortedUnique = Array.from(new Set(arr)).sort((a, b) => a - b);

    // Create a map to store the rank of each unique element
    const rankMap = {};
    sortedUnique.forEach((value, index) => {
        rankMap[value] = index + 1; // Assign rank starting from 1
    });

    // Transform the original array to ranks using the rank map
    return arr.map(value => rankMap[value]);    
};