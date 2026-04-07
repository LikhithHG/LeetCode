# Definition for an infinite stream.
# class InfiniteStream:
#     def next(self) -> int:
#         pass
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        left = 0
        right = 0
        bit_list = []
        pattern_length = len(pattern)

        while True:
            if right - left + 1 > pattern_length:
                bit_list.pop(0)
                left += 1
            
            bit_list.append(stream.next())

            if bit_list == pattern:
                return left
            
            right += 1