/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) 
{
    const n = nums.length;
    let start = 0;

    for (let i = 1; i < n; i++) 
    {
        // If current number is not consecutive to previous, validate the segment
        if (nums[i] - nums[i - 1] > 1) 
        {
            if (!isSegmentValid(nums, start, i - 1)) 
                return false;
            start = i;
        }
    }

    // Check the last segment
    return isSegmentValid(nums, start, n - 1);
};

function isSegmentValid(nums, start, end) 
{
    let frequency = 0;
    let lengthOneSubsequences = 0;
    let lengthTwoSubsequences = 0;
    let totalNoOfSubsequences = 0;

    for (let i = start; i <= end; i++) 
    {
        if (i > start && nums[i] === nums[i - 1]) 
            frequency++;

        else 
        {
            if (frequency < lengthOneSubsequences + lengthTwoSubsequences) 
                return false;

            lengthTwoSubsequences = lengthOneSubsequences;
            lengthOneSubsequences = Math.max(0, frequency - totalNoOfSubsequences);
            totalNoOfSubsequences = frequency;
            frequency = 1;
        }
    }

    // Handle the last element
    lengthTwoSubsequences = lengthOneSubsequences;
    lengthOneSubsequences = Math.max(0, frequency - totalNoOfSubsequences);

    return lengthOneSubsequences === 0 && lengthTwoSubsequences === 0;
}