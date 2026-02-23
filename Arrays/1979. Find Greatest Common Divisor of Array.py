class Solution:
    def findGCD(self, nums: List[int]) -> int:
        max_num = max(nums)
        min_num = min(nums)
        
        # Euclidean algorithm
        while min_num > 0 and max_num > 0:

            if max_num > min_num:
                max_num = max_num % min_num
                
            else:
                min_num = min_num % max_num
        
        return min_num if max_num == 0 else max_num