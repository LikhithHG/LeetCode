/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) 
{
    function maxSum(len1, len2)
    {
        let n = nums.length;
        let maxL1 = 0;
        let sumL1 = 0;
        let sumL2 = 0;
        let maxTotal = 0;

        //First window for L1 and L2
        for(let i = 0; i < len1; i++)
            sumL1 += nums[i];
        
        for(let i = len1; i < len1 + len2; i++)
            sumL2 += nums[i];
        
        maxL1 = sumL1;
        maxTotal = sumL1 + sumL2;

        //slide the windows
        for(let i = len1 + len2; i < n; i++)
        {
            //Slide L1
            sumL1 += nums[i - len2] - nums[i - len2 - len1];
            maxL1 = Math.max(maxL1, sumL1);

            //Slide L2
            sumL2 += nums[i] - nums[i - len2];

            maxTotal = Math.max(maxTotal, maxL1 + sumL2);
        }
        return maxTotal;
    }

    return Math.max(maxSum(firstLen, secondLen), maxSum(secondLen, firstLen));
};