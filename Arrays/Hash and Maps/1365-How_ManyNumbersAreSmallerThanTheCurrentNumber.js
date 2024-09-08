/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) 
{
    let sortedNums = [...nums].sort((a, b) => a - b);
    
    // Create a map to store how many numbers are smaller than each unique number
    let countMap = new Map();
    
    // Populate the map with the index of the first occurrence of each number in the sorted array
    sortedNums.forEach((num, index) => {
        if (!countMap.has(num)) {
            countMap.set(num, index);
        }
    });
    
    // Create the result array using the map
    return nums.map(num => countMap.get(num));
};