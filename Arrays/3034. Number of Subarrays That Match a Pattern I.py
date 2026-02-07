class Solution:
    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
        n, m = len(nums), len(pattern)

        def sign(x):
            return 1 if x > 0 else 0 if x == 0 else -1

        def match(i):
            return all(sign(nums[i + k + 1] - nums[i + k]) == pattern[k] for k in range(m))

        return sum(match(i) for i in range(n - m))