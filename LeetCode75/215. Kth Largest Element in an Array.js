/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) 
{
    const maxHeap = new MaxPriorityQueue({ priority: x => x }); // Priority = value itself
    //Add the elements to the max Priority queue
    for (const num of nums) 
        maxHeap.enqueue(num);
    
    while(maxHeap.size() > 0)
    {
        let largest = maxHeap.dequeue().element;
        k -= 1;
        if(k === 0)
            return largest;
    }
};

/*
Min Heap concept
let minHeap = [];
    
    for(let i = 0; i < nums.length; i++)
    {
        minHeap.push(nums[i]);
        minHeap.sort((a, b) => a - b);
        if(minHeap.length > k)
            minHeap.shift();
    }
    return minHeap[0];   
*/