class Solution:
    def maxScore(self, nums: List[int]) -> int:
        maximum = 0
        result = 0

        for i in range(len(nums) - 1, 0, -1):
            maximum = max(maximum, nums[i])
            result += maximum
        
        return result