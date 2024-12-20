/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) 
{
    /*
    Deque always stores the elements in the descending order
    For each element nums[i], handle:
    Remove indices from the front of the deque if they are outside the window.
    Remove indices from the back of the deque if the value at those indices is less than nums[i].
    Push the current index i into the deque.
    If the current index is >= k - 1, push nums[deque[0]] (max of the current window) into the result.
    */
    let dequeue = [];//Store the indices
    let result = [];

    for(let i = 0; i < nums.length; i++)
    {
        //Remove the indices that are out of the window from the begining
        if(dequeue.length > 0 && dequeue[0] < i - k + 1)
            dequeue.shift();
        
        while(dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i])
            dequeue.pop();
        
        dequeue.push(i);

        if(i >= k - 1)
            result.push(nums[dequeue[0]]);
    }
    return result;
};