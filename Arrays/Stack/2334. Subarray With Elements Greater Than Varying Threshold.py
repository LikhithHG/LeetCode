class Solution:
    def validSubarraySize(self, nums: List[int], threshold: int) -> int:
        nums.append(0)
        stack = []

        for index in range(len(nums)):
            while stack and nums[index] <= nums[stack[-1]]:
                n = nums[stack.pop()]

                if not stack:
                    k = index
                else:
                    k = index - stack[-1] - 1
            
                if n > threshold / k:
                    return k
            
            stack.append(index)

        return -1        