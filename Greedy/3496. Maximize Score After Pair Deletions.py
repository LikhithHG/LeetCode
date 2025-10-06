class Solution:
    def maxScore(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return 0
        
        prefixSum = 0
        minimumValue = float('inf')
        minimumSum = float('inf')

        for i in range(n):
            prefixSum += nums[i]
            if i > 0:
                minimumSum = min(minimumSum, nums[i - 1] + nums[i])
            
            minimumValue = min(minimumValue, nums[i])
        
        if n % 2 != 0:
            return prefixSum - minimumValue
        
        return prefixSum - minimumSum