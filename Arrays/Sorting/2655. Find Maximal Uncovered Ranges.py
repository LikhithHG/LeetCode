class Solution:
    def findMaximalUncoveredRanges(self, n: int, ranges: List[List[int]]) -> List[List[int]]:
        res, last= [], 0

        for s, e in sorted(ranges) + [[n,n]]:

            if s > last:
                res.append([last, s - 1])

            last = max(last, e + 1)
            
        return res