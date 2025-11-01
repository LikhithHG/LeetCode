class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        maxNum = max(nums)
        numsSet = set(nums)
        count = 0

        for d in range(1, maxNum + 1): #check gcd from 1 to maxNum
            g = 0
            for j in range(d, maxNum + 1, d): #check if we have a subsequence with gcd d
                if j in numsSet:
                    g = gcd(g, j)
                    if g == d:
                        count += 1
                        break
        
        return count