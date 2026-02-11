class Solution:
    def largestSubarray(self, nums: List[int], k: int) -> List[int]:
        loc = {x: i for i, x in enumerate(nums)}

        for x in sorted(nums, reverse=True): 
            i = loc[x]
            
            if i + k <= len(nums): 
                return nums[i:i+k]