class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        mod = 10 ** 9 + 7

        def countAndSum(nums, n, target):
            count = 0
            currentSum = 0
            totalSum = 0
            windowSum = 0
            i = 0

            for j in range(n):
                currentSum += nums[j]
                windowSum += nums[j] * (j - i + 1)

                while currentSum > target:
                    windowSum -= currentSum
                    currentSum -= nums[i]
                    i += 1

                count += j - i + 1
                totalSum += windowSum

            return count, totalSum

        def sumOfFirstK(nums, n, k):
            minSum = min(nums)
            maxSum = sum(nums)
            left = minSum
            right = maxSum

            while left <= right:
                mid = left + (right - left) // 2

                if countAndSum(nums, n, mid)[0] >= k:
                    right = mid - 1

                else:
                    left = mid + 1

            count, totalSum = countAndSum(nums, n, left)
            # There can be more subarrays with the same sum of left.
            return totalSum - left * (count - k)
        
        result = (
            sumOfFirstK(nums, n, right) - sumOfFirstK(nums, n, left - 1)
        ) % mod
        
        # Ensure non-negative result
        return (result + mod) % mod