class Solution:
    def canChoose(self, groups: List[List[int]], nums: List[int]) -> bool:
        length = len(groups)
        idx = 0
        
        for i in groups:
            for j in range(idx, len(nums)):
                if nums[j : j + len(i)] == i:
                    idx = j + len(i)
                    length -= 1
                    break

        return length == 0