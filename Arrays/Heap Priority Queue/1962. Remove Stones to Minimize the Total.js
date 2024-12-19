/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) 
{
     const maxHeap = new MaxPriorityQueue({ priority: x => x }); // Priority = value itself
     let totalSum = 0;
    //Add the elements to the max Priority queue
    for (const pile of piles)
    {
        maxHeap.enqueue(pile);
        totalSum += pile;
    } 
    
    while(k > 0)
    {
        let large = maxHeap.dequeue().element;
        let remove = Math.floor(large / 2);
        maxHeap.enqueue(large - remove);
        totalSum -= remove;
        k -= 1;
    }  
    return totalSum;
};