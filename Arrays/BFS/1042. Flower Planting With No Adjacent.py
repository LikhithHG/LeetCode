class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:
        neighbors = defaultdict(set)

        for a, b in paths:
            neighbors[a].add(b)
            neighbors[b].add(a)

        ans = [0] * n

        for i in range(1, n + 1):
            available = {1, 2, 3, 4}

            for neighbor in neighbors[i]:

                if ans[neighbor - 1] in available:
                    available.remove(ans[neighbor - 1])

            ans[i - 1] = available.pop()
            
        return ans