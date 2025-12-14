class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort(key=abs, reverse=True)
        return abs(nums[0]) * abs(nums[1]) * 10**5