class Solution:
    def twoEggDrop(self, n: int) -> int:
        return math.ceil((-1 + math.sqrt(1 + 8*n)) / 2)