class Solution:
    def minOperations(self, nums: List[int]) -> int:
        count = 0

        for i in range(2, len(nums)):
            if nums[i - 2] == 0:
                count += 1
                nums[i - 2] ^= 1
                nums[i - 1] ^= 1
                nums[i] ^= 1

        #sum of all elements in array equals length of array then all are 1
        if sum(nums) == len(nums):
            return count
        
        return -1