class Solution:
    def minArraySum(self, nums: List[int], k: int) -> int:
        dp = [0] + [inf] * (k - 1)
        res = 0

        for num in nums:
            res += num
            res = dp[res % k] = min(dp[res % k], res)
        
        return res