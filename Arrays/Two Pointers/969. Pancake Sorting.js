/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) 
{
    const result = [];

    // Helper function to flip the first k elements
    const flip = (arr, k) => {
        let left = 0, right = k - 1;
        while (left < right) 
        {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    };

    // Main sorting logic
    for (let size = arr.length; size > 0; size--) 
    {
        // Find the index of the value to move
        let index = arr.indexOf(size);

        if (index === size - 1) 
            continue; // already in place

        // Step 1: Flip to bring the value to the front
        if (index !== 0) 
        {
            result.push(index + 1);
            flip(arr, index + 1);
        }

        // Step 2: Flip to move it to its correct position
        result.push(size);
        flip(arr, size);
    }

    return result;
};