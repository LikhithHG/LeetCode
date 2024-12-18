/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) 
{
    // Step 1: Calculate the initial sum
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let target = totalSum / 2;

    // Step 2: Create a max heap
    const maxHeap = new MaxPriorityQueue();
    for (const num of nums) 
    {
        maxHeap.enqueue(num, num); // Priority = value itself
    }

    let operations = 0;
    let reducedSum = 0;

    // Step 3: Halve the largest elements until the sum is reduced by at least half
    while (reducedSum < target) 
    {
        let largest = maxHeap.dequeue().element; // Get the largest element
        let halved = largest / 2;
        reducedSum += halved; // Add halved value to the reduced sum
        maxHeap.enqueue(halved, halved); // Reinsert the halved value into the heap
        operations++;
    }

    return operations;
};

/*
    // Step 1: Calculate the initial sum
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let target = totalSum / 2;

    // Step 2: Sort the array in descending order to simulate a max heap
    nums.sort((a, b) => b - a);

    let operations = 0;
    let reducedSum = 0;

    // Step 3: Halve the largest elements until the sum is reduced by at least half
    while (reducedSum < target) 
    {
        // Get the largest element (nums[0] since the array is sorted)
        let largest = nums.shift(); // Removes the largest element
        let halved = largest / 2;
        reducedSum += halved; // Add halved value to the reduced sum
        nums.push(halved); // Add the halved value back to the array
        nums.sort((a, b) => b - a); // Re-sort the array to maintain max heap behavior
        operations++;
    }

    return operations;
*/