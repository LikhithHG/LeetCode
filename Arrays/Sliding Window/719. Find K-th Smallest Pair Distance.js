/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) 
{
    nums.sort((a, b) => a - b);
    let size = nums.length;

    //Binary search range initialization
    let low = 0;
    let high = nums[size - 1] - nums[0];

    while(low < high)
    {
        let mid = Math.floor((low + high) / 2);

        // Count pairs with distance <= mid
        let count = countPairsWithMaxDistance(nums, mid);

        // Adjust binary search bounds based on count
        if (count < k) 
            low = mid + 1;
        else 
            high = mid;
    }    

    return low;
};

var countPairsWithMaxDistance = function(nums, maxDistance)
{
    let count = 0;
    let size = nums.length;
    let left = 0;

    for(let right = 0; right < size; right++)
    {
        // Adjust the left pointer to maintain the window with distances <= maxDistance
            while (nums[right] - nums[left] > maxDistance) 
                ++left;
            // Add the number of valid pairs ending at the current right index
            count += right - left;
    } 
    return count;
}