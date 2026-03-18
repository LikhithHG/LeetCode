class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        def digit_sum(num: int) -> int:
            total = 0

            while num:
                total += num % 10
                num //= 10

            return total

        n = len(nums)
        order = sorted(range(n), key=lambda i: (digit_sum(nums[i]), nums[i]))
        swaps = 0

        for current_idx, target_idx in enumerate(order):
            while current_idx != target_idx:
                order[target_idx], target_idx = target_idx, order[target_idx]
                swaps += 1

        return swaps