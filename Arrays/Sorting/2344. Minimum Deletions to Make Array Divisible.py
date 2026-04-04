class Solution:
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        n, numsDivide_set = len(nums), set(numsDivide)
        gcd_val = numsDivide[0]
        nums.sort()

        for i in numsDivide_set:
            gcd_val = math.gcd(gcd_val,i)

        for i in range(n):
            if gcd_val % nums[i] == 0:
                return i 

        return -1