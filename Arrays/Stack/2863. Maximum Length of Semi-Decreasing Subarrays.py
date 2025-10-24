class Solution:
    def maxSubarrayLength(self, nums: List[int]) -> int:
        n = len(nums)
        rightMin = [nums[n - 1]] * n

        for i in range(n - 2, -1, -1):
            rightMin[i] = min(rightMin[i + 1], nums[i])
        
        result = 0
        i = 0
        j = 0

        while i < n and j < n:
            j = max(i, j)

            while j < n and rightMin[j] < nums[i]:
                j += 1
            
            result = max(result, j - i)
            i += 1
        
        return result