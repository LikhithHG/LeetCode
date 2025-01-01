/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) 
{
    let n = nums.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    //Diagonal elements
    for(let i = 0; i < n; ++i) 
        dp[i][i] = nums[i];
    
    for(let diff = 1; diff < n; diff++)
    {
        for(let left = 0; left + diff < n; left++)
        {
            let right = left + diff;
            dp[left][right] = Math.max(nums[left] - dp[left + 1][right], nums[right] - dp[left][right - 1]);
        }
    }
    return dp[0][n - 1] >= 0;
};

/*
    function maxDiff(left, right)
    {
        if(left === right)
            return nums[left];
        
        let scoreOfLeft = nums[left] - maxDiff(left + 1, right);
        let scoreOfRight = nums[right] - maxDiff(left, right - 1);

        return Math.max(scoreOfLeft, scoreOfRight);
    }

    return maxDiff(0, nums.length - 1) >= 0;
*/