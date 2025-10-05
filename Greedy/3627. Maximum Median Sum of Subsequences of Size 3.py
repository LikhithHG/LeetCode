class Solution:
    def maximumMedianSum(self, nums: List[int]) -> int:
        nums.sort()
        left, right = 0, len(nums)
        answer = 0

        while(left < right):
            left += 1
            right -= 2
            answer += nums[right]
        
        return answer