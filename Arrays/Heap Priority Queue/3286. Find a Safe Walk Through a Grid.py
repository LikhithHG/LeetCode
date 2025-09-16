class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:
        #define a priority queue 
        priorityQue = []
        m = len(grid)
        n = len(grid[0])

        #stores the visited
        visited = [[False] * n for _ in range(m)]

        #we can move in only 4 directions
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        #push the value of the health in the begining
        heapq.heappush(priorityQue, (-health + grid[0][0], 0, 0))

        while priorityQue:
            cellHealth, x, y = heapq.heappop(priorityQue)

            if not visited[x][y]:
                visited[x][y] = True

                if x == m - 1 and y == n - 1 and -cellHealth >= 1:
                    return True
                
                for dx, dy in directions:
                    nx, ny = dx + x, dy + y

                    if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny]:
                        newHealth = -cellHealth - grid[nx][ny] 
                        heapq.heappush(priorityQue, (-newHealth, nx, ny))
            
        return False

            



        