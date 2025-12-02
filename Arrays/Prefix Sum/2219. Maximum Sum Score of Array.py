class Solution:
    def maximumSumScore(self, nums: List[int]) -> int:
        maximum = -math.inf
        sums = sum(nums)
        current = 0

        for num in nums:
            current += num
            maximum = max(max(sums, current), maximum)
            sums -= num
        
        return maximum