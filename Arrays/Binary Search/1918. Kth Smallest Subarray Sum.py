class Solution:
    def kthSmallestSubarraySum(self, nums: List[int], k: int) -> int:
        def fn(x):
            """Return number of subarrays sums <= x."""
            ans = rsm = ii = 0

            for i in range(len(nums)): 
                rsm += nums[i]

                while rsm > x: # sliding window 
                    rsm -= nums[ii]
                    ii += 1

                ans += i - ii + 1
                
            return ans 
        
        lo, hi = 0, sum(nums)
        
        while lo < hi: 
            mid = lo + hi >> 1
            
            if fn(mid) < k: 
                lo = mid + 1
            else: 
                hi = mid

        return lo