class Solution:
    def delayedCount(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        ans = [0] * n
        h = defaultdict(int)

        for i in range(n - 1, -1, -1):
            f = i + k + 1

            if f < n:
                h[nums[f]] += 1

            ans[i] = h[nums[i]]
            
        return ans