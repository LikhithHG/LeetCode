class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        
        # 100,000
        
        # the indice products are perfect squares
        
        # 1, 4 = 4
        
        # 2, 8 = 16
        
        # 1, 9 = 16
        
        # 1, 4, 9 = 14
        
        # goal: get length of nums N
        # consider the array 1-indexed
        
        # get every comination of numbers 1...n s.t. the product is a perfect square in nlogntime
        
        # sum these possibilities and take largest nlogntime
        
        # all numbers in the array are positive, so the "more" numbers the better
        
        # ex: if the array is length 9 or longer, we dont care about 1, 4, 9, or 1 4, or 1, 9 only 1, 4, 9
        
        # 1, 4, 9, 16

        # 2, 8, 18, 32

        # 3, 12, 27, 48
        # ...

        answer = max(nums)
        n = len(nums)

        for start in range(1, n):
            total = 0
            a = 1

            while a * a * start <= n:
                total += nums[a * a * start - 1]
                a += 1
            
            answer = max(answer, total)

        return answer