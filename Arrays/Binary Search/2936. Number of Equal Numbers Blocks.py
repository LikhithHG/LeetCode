# Definition for BigArray.
# class BigArray:
#     def at(self, index: long) -> int:
#         pass
#     def size(self) -> long:
#         pass
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        n = nums.size()
        r = 0
        i = 0

        while i < n:
            left = i
            right = n - 1
            
            while left <= right:
                mid = (left + right) // 2
                if nums.at(mid) == nums.at(i):
                    left = mid + 1

                else:
                    right = mid - 1

            i = right + 1
            r += 1

        return r