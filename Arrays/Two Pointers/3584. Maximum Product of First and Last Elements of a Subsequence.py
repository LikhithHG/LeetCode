class Solution:
    def maximumProduct(self, nums: List[int], m: int) -> int:
        maxElement = nums[0]
        minElement = nums[0]
        result = -inf

        for i in range(m - 1, len(nums)):
            maxElement = max(maxElement, nums[i - m + 1])
            minElement = min(minElement, nums[i - m + 1])
            result = max(result, maxElement * nums[i], minElement * nums[i])
        
        return result