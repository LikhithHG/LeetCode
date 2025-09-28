class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        res = []
        mid = len(nums) // 2
        left, right = nums[:mid], nums[mid:]

        for i in range(mid):
            res.append(right[i])
            res.append(left[i])

        if len(nums) % 2:
            res.append(right[-1])
        
        return res