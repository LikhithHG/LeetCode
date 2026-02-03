class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        tmp = []

        for g in grid:
            for a in g:
                tmp.append(a)
                
        print(tmp)
        tmp.sort()
        print(tmp)
        mid = len(tmp) // 2
        return tmp[mid]