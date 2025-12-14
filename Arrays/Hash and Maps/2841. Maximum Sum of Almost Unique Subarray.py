class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        res = 0
        for i in range(len(nums) - k + 1):
            if len(set(nums[i : i + k])) >= m:
                res = max(res, sum(nums[i : i + k]))
        
        return res 