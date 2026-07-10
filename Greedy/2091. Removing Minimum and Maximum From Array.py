class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        
        min_index = nums.index(min(nums))
        max_index = nums.index(max(nums))

        left = min(min_index, max_index)
        right = max(min_index, max_index)

        # Option 1: Remove both from the front
        remove_from_front = right + 1

        # Option 2: Remove both from the back
        remove_from_back = n - left

        # Option 3: Remove one from each side
        remove_from_both_sides = (left + 1) + (n - right)

        return min(remove_from_front, remove_from_back, remove_from_both_sides)