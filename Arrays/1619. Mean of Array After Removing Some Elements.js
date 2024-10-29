/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) 
{
    arr.sort((a, b) => a - b); // Step 1: Sort the array
    const n = arr.length;
    const removeCount = Math.floor(n * 0.05); // Step 2: Calculate 5% of n
    let sum = 0;
    count = 0;

    for(let i = removeCount; i < n - removeCount; i++)
    {
        sum += arr[i];
        count += 1;
    }
    return sum / count;
};
/*
const trimmedArr = arr.slice(removeCount, n - removeCount);

    // Step 4: Calculate the mean of the trimmed array
    const sum = trimmedArr.reduce((acc, val) => acc + val, 0);
    return sum / trimmedArr.length;
*/