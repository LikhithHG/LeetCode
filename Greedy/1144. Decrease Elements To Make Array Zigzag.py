class Solution:
    def movesToMakeZigzag(self, nums: List[int]) -> int:
        n = len(nums)

        # Case 1: Make even indices valleys
        even = 0

        for i in range(0, n, 2):
            dec = 0

            if i - 1 >= 0 and nums[i] >= nums[i - 1]:
                dec = max(dec, nums[i] - nums[i - 1] + 1)

            if i + 1 < n and nums[i] >= nums[i + 1]:
                dec = max(dec, nums[i] - nums[i + 1] + 1)

            even += dec
        
        # Case 2: Make odd indices valleys
        odd = 0
        for i in range(1, n, 2):
            dec = 0

            if i - 1 >= 0 and nums[i] >= nums[i - 1]:
                dec = max(dec, nums[i] - nums[i - 1] + 1)

            if i + 1 < n and nums[i] >= nums[i + 1]:
                dec = max(dec, nums[i] - nums[i + 1] + 1)
                
            odd += dec
        
        return min(even, odd)