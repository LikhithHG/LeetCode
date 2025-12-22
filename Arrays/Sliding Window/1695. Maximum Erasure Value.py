class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        k = 10001

        last_indexes = [-1] * k
        prefix_sum = [0] * (n + 1)

        result = 0
        start = 0

        for end in range(n):
            current_element = nums[end]
            prefix_sum[end + 1] = prefix_sum[end] + current_element

            if last_indexes[current_element] != -1:
                start = max(start, last_indexes[current_element] + 1)

            result = max(result, prefix_sum[end + 1] - prefix_sum[start])
            last_indexes[current_element] = end

        return result