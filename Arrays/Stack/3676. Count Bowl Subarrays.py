class Solution:
    def bowlSubarrays(self, nums: List[int]) -> int:
        stack = []
        result = 0

        for right, num in enumerate(nums):
            
            while stack and nums[stack[-1]] <= num:
                left = stack.pop()
                if right - left + 1 >= 3:
                    result += 1
            
            if stack and right - stack[-1] + 1 >= 3:
                result += 1
                
            stack.append(right)
        
        return result