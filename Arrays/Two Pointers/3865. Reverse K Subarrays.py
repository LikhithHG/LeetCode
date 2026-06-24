class Solution:
    def reverseSubarrays(self, nums: list[int], k: int) -> list[int]:
        n = len(nums)
        size = n // k

        for i in range(0, n, size):
            left = i
            right = i + size - 1

            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

        return nums