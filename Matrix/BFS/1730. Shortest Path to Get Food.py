class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        #Possible moves
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        #length and width of the grid
        rows, cols = len(grid), len(grid[0])

        #To find the start 
        #start = next(
        #   (i, j)
        #   for i in range(rows)
        #   for j in range(cols)
        #   if grid[i][j] == '*'
        #)
        start = None
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '*':
                    start = (r, c)

        steps = 1
        queue = deque([start])

        while queue:
            #process all the cells in the current level
            for _ in range(len(queue)):
                row, col = queue.popleft()

                #check all directions 
                for dx, dy in directions:
                    new_row, new_col = row + dx, col + dy

                    #check if the new cell is valid 
                    if 0 <= new_row < rows and 0 <= new_col < cols and grid[new_row][new_col] != 'X':
                        #Found the food
                        if grid[new_row][new_col] == '#':
                            return steps
                        
                        #Mark as visited 
                        grid[new_row][new_col] = 'X'
                        queue.append((new_row, new_col))
                
            steps += 1
        
        return -1
            