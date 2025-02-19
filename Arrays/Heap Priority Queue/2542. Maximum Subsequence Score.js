/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) 
{
    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue(); // Min-Heap

    const merged = nums1.map((num1Val, i) => [nums2[i], num1Val]);
    merged.sort((a, b) => b[0] - a[0]); // Sort by nums2 in descending order

    for (const [maxOf2, num1Val] of merged) 
    {
        heap.enqueue(num1Val);
        totalSum += num1Val;

        if (heap.size() > k) 
        {
            totalSum -= heap.dequeue();
        }

        if (heap.size() === k) 
        {
            result = Math.max(result, totalSum * maxOf2);
        }
    }

    return result;
};