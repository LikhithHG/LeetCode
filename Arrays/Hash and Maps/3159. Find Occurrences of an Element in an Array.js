/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) 
{
    //Create a map to store indices where x appears
    const occurrences = [];
    
    //Store all indices where x appears in nums
    for (let i = 0; i < nums.length; i++) 
    {
        if (nums[i] === x)
            occurrences.push(i);
    }
    
    // Process each query
    const answer = queries.map(query => {
        // If query is asking for an occurrence number greater than what exists
        // or if x never appears in nums (occurrences is empty)
        if (query > occurrences.length || occurrences.length === 0) {
            return -1;
        }
        
        // Return the index of the query-th occurrence (adjusting for 1-based indexing)
        return occurrences[query - 1];
    });
    
    return answer;    
};