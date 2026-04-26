class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        ans, hi, n, c = 0, max(nums)+1, len(nums), Counter(nums)
        pre = [0] * hi

        for i in range(1, hi):
            pre[i] = pre[i-1] + c[i]

        for num in set(nums):
            
            for i in range(num, hi, num):
                ans += c[num] * (pre[-1] - pre[i-1])

        return ans % (10**9 + 7)