class Solution:
    def minDayskVariants(self, points: List[List[int]], k: int) -> int:
        minx = min([x for x, _ in points])
        maxx = max([x for x, _ in points])
        miny = min([y for _, y in points])
        maxy = max([y for _, y in points])

        que = deque([(x, y, i, 0) for i, (x, y) in enumerate(points)])
        visited = defaultdict(set)
        count = defaultdict(int)

        while que:
            x, y, i, time = que.popleft()
            if (x, y) in visited[i]: 
                continue

            count[(x, y)] += 1
            if count[(x, y)] == k: 
                return time

            visited[i].add((x, y))
            for dx, dy in [[-1, 0],[1, 0],[0, -1],[0, 1]]:
                if minx <= x + dx <= maxx and miny <= y + dy <= maxy:
                    que.append((x + dx, y + dy, i, time + 1))