class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        dup, missing = -1, 1

        # First pass: Mark seen numbers by negating the value at their index.
        # If we find an index that's already negative, its corresponding
        # number (abs(n)) must be the duplicate.
        for n in nums:
            index = abs(n) - 1
            if nums[index] < 0:
                dup = abs(n)
            else:
                nums[index] *= -1

        # Second pass: Find the first positive value.
        # The index 'i' of this positive value means the number 'i + 1'
        # was never seen in the first pass.
        # We initialize 'missing = 1' to handle the edge case where '1'
        # is the missing number (since the loop starts at index 1).
        for i in range(1, len(nums)):
            if nums[i] > 0:
                missing = i + 1
                # Since we know there is only one, we could break,
                # but the original Java code doesn't.
                # In this specific problem, it doesn't matter
                # if we break or not because nums[i] > 0
                # will only be true for the one missing number.

        return [dup, missing]