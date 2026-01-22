class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n, count, ans = len(nums), 0, []
        nums = nums[::-1]

        for i in nums:
            idx = bisect.bisect_right(ans,i)

            if idx == len(ans):
                ans.append(i)

            else:
                ans[idx] = i 

        return len(ans) 