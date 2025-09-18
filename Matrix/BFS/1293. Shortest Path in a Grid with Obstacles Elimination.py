class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        rows, cols = len(grid), len(grid[0])
        target = (rows - 1, cols - 1)

        #if we have enough value of k to eliminate the obstrucles
        if k >= rows + cols - 2:
            return rows + cols - 2
        
        #(row, col, remaining obstrucles)
        state = (0, 0, k)
        #(steps, state)
        queue = deque([(0, state)])
        seen = set([state])

        while queue:
            steps, (row, col, k) = queue.popleft()

            if (row, col) == target:
                return steps
            
            #explore the other 4 directions
            for new_row, new_col in [(row, col + 1), (row + 1, col), (row, col - 1), (row - 1, col)]:
                #check if new row and new col are within the grid boundries
                if 0 <= new_row < rows and 0 <= new_col < cols:
                    new_k = k - grid[new_row][new_col]
                    new_state = (new_row, new_col, new_k)

                    #Add next move in the queue if it qualifies
                    if new_k >= 0 and new_state not in seen:
                        seen.add(new_state)
                        queue.append((steps + 1, new_state))

        
        return -1