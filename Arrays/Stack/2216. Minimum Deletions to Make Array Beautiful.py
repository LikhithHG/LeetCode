class Solution:
    def minDeletion(self, nums: List[int]) -> int:
        n = len(nums)
        count = 0

        # flag is true then check the even index
        # flag is false then check the odd index
        flag = True
        
        for i in range(n):
            # check the even index
            if flag:
                if i % 2 == 0 and i != n -1 and nums[i] == nums[i + 1]:
                    count += 1
                    flag = False
            # check the odd index
            elif not flag:
                if i % 2 == 1 and i != n -1 and nums[i] == nums[i + 1]:
                    count += 1
                    flag = True
        
        curLength = n - count
        
        return count if curLength % 2 == 0 else count + 1