class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        for i in nums:
                i.sort(reverse = True)
        
        sum = 0
        j = 0
        
        while j < len(nums[0]):
            max = 0

            for i in nums:   
                if max < i[j]:
                    max = i[j]

            sum += max  
            j += 1

        return sum    