/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) 
{
    let frequency = new Map();

    for(let num of nums)
    {
        frequency.set(num, (frequency.get(num) || 0 ) + 1);
    }

    let heap = [];
    for(let [num, freq] of frequency)
    {
        heap.push({freq, num});
        heap.sort((a, b) => b.freq - a.freq);
        if(heap.length > k)
            heap.pop();
    }

    return heap.map(item => item.num);
};