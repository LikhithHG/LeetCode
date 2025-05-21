/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) 
{
    const n = nums.length;
    const kIndex = nums.indexOf(k);

    const balanceMap = new Map();
    balanceMap.set(0, 1);  // Base balance (empty prefix)

    let balance = 0;

    // Traverse to the left of k
    for (let i = kIndex - 1; i >= 0; i--) 
    {
        if (nums[i] < k) 
            balance--;
        else 
            balance++;
        balanceMap.set(balance, (balanceMap.get(balance) || 0) + 1);
    }

    let count = 0;
    balance = 0;

    // Traverse to the right including k
    for (let i = kIndex; i < n; i++) 
    {
        if (nums[i] > k) 
            balance++;
        else if (nums[i] < k) 
            balance--;

        // Match balance from left side
        count += (balanceMap.get(-balance) || 0);
        count += (balanceMap.get(1 - balance) || 0); // for even-length
    }

    return count;    
};