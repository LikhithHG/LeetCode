class Solution:
    def maxProfit(self, workers: List[int], tasks: List[List[int]]) -> int:
        data = defaultdict(list)
        for skill, profit in tasks:
            data[skill].append(profit)
        for v in data.values():
            v.sort()
        
        result = sum(
            data[skill].pop()
            for skill in workers
            if data[skill]
        )
        additional = max(
            (v[-1] for v in data.values() if v),
            default = 0,
        )
        return result + additional