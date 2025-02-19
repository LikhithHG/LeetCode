/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

var totalCost = function(costs, k, candidates) 
{
    const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
    
    let n = costs.length;
    let total = 0;
    
    // Modified priority function to handle equal costs by preferring smaller indices
    let queue = new MinPriorityQueue((worker) => worker.cost * n + worker.index);

    let left = 0;
    let right = n - 1;

    // Step 1: Fill the heap with the first `candidates` elements from both ends
    for (let i = 0; i < candidates; i++) 
    {
        if (left <= right) 
        {
            queue.enqueue({ cost: costs[left], index: left });
            left++;
        }
        if (left <= right) 
        {
            queue.enqueue({ cost: costs[right], index: right });
            right--;
        }
    }

    // Step 2: Hire `k` workers
    for (let i = 0; i < k; i++) 
    {
        let worker = queue.dequeue();
        total += worker.cost;

        // Step 3: Replenish workers
        if (worker.index < left) 
        { // Worker was from the left side
            if (left <= right) 
            {
                queue.enqueue({ cost: costs[left], index: left });
                left++;
            }
        } 
        else 
        { // Worker was from the right side
            if (left <= right) 
            {
                queue.enqueue({ cost: costs[right], index: right });
                right--;
            }
        }
    }

    return total;
};