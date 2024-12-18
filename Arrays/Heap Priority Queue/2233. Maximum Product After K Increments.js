/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) 
{
    const MOD = 1e9 + 7;

    // Step 1: Create a min-heap
    const minHeap = new MinPriorityQueue({ priority: x => x });
    for (const num of nums)
        minHeap.enqueue(num);

    // Step 2: Perform k increments
    while (k > 0) 
    {
        let smallest = minHeap.dequeue().element; // Get the smallest element
        smallest += 1; // Increment it
        minHeap.enqueue(smallest); // Push it back into the heap
        k -= 1;
    }

    // Step 3: Calculate the product of all elements
    let product = 1;
    while (!minHeap.isEmpty())
        product = (product * minHeap.dequeue().element) % MOD;

    return product;    
};