class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        if not rooms:
            return

        m, n = len(rooms), len(rooms[0])
        q = deque()
        
        # Constants matching the problem description
        EMPTY = 2147483647
        GATE = 0
        DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        # 1. Initialize the queue with all Gate coordinates
        for row in range(m):
            for col in range(n):
                if rooms[row][col] == GATE:
                    q.append((row, col))

        # 2. Perform Multi-source BFS
        while q:
            r, c = q.popleft()
            
            for dr, dc in DIRECTIONS:
                nr, nc = r + dr, c + dc
                
                # Check bounds
                if nr < 0 or nc < 0 or nr >= m or nc >= n:
                    continue
                
                # Check if the room is EMPTY (meaning unvisited)
                if rooms[nr][nc] == EMPTY:
                    # Update distance and add to queue
                    rooms[nr][nc] = rooms[r][c] + 1
                    q.append((nr, nc))