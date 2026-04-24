class Solution:
    def minimumBoxes(self, n: int) -> int:
        edge = 1
        total = 0
        floor = 1

        while total + floor < n:
            total += floor
            edge += 1
            floor += edge

        answer = floor - edge

        while total + floor >= n:
            floor -= edge 
            edge -= 1
            
        return answer + edge + 1