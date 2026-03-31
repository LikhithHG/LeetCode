class Solution:
    def gcdSum(self, nums: list[int]) -> int:
        n = len(nums)
        mx = -inf
        prefixGcd = []

        for num in nums:
            mx = max(mx, num)
            prefixGcd.append(gcd(num, mx))
        
        prefixGcd.sort()
        left = 0
        right = len(prefixGcd)-1
        res = 0
        
        while left < right:
            res += gcd(prefixGcd[left], prefixGcd[right])
            left += 1
            right -= 1
        
        return res