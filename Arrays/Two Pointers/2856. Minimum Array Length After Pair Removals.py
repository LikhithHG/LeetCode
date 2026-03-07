class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        n = len(nums)  # Total number of elements in the array.
        mid = n // 2    # The number of elements we want to keep.

        i = n - 1     # Pointer to the end of the array.
        j = mid - 1   # Pointer to the middle of the array.
        removals = 0  # Count of elements to remove.

        # Iterate from the end of the array towards the middle.
        while j >= 0:
            if nums[i] > nums[j]:
                removals += 2  # If nums[i] > nums[j], we need to remove two elements.
                i -= 1
            j -= 1

        # Remaining length will be the total length minus removed elements in pairs.
        return n - removals