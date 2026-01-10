class Solution:
    def binarySearchableNumbers(self, nums: List[int]) -> int:
        N = len(nums)
        min_right = float('inf')
        candidates = set()

        for i in reversed(range(N)):
            if nums[i] < min_right:
                candidates.add(i)

            min_right = min(min_right, nums[i])
            
        max_left = -float('inf')
        res = 0

        for i in range(len(nums)):
            if i in candidates and max_left < nums[i]:
                res += 1
                
            max_left = max(max_left, nums[i])
            
        return res