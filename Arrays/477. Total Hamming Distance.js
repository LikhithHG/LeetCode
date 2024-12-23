/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) 
{
    if (nums.length === 0) return 0;

    let ans = 0;
    const n = nums.length;
    const cnt = new Array(32).fill(0); // Array to count elements with a particular bit ON

    // Count bits for each number
    for (const num of nums) 
    {
        let number = num;
        let i = 0;
        while (number > 0) 
        {
            cnt[i] += (number & 1); // Check if the least significant bit is ON
            number >>= 1; // Right shift to check the next bit
            i++;
        }
    }

    // Calculate Hamming distances
    for (const k of cnt) 
    {
        ans += k * (n - k); // k * (n - k) for each bit position
    }

    return ans;    
};