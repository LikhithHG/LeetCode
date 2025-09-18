class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        '''
            This is a slice operation. 
            row refers to an individual sub-list (i.e., a row of the matrix).
            [:] means you are making a shallow copy of the entire row.
            If you just do row, it would be a reference to the same list, meaning 
            any   modification would reflect in both the original and copied lists. 
            By using [:], you're creating a copy of the row that’s independent 
            of the original list.
        '''
        matrix = [row [:] for row in mat]
        m = len(matrix)
        n = len(matrix[0])
        queue = deque()
        seen = set()

        for row in range(m):
            for col in range(n):
                if matrix[row][col] == 0:
                    queue.append((row, col, 0))
                    seen.add((row, col))
        
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        while queue: 
            row, col, steps = queue.popleft()

            for dx, dy in directions:
                next_row, next_col = row + dx, col + dy

                if (next_row, next_col) not in seen and 0 <= next_row < m and 0 <= next_col < n:
                    seen.add((next_row, next_col))
                    queue.append((next_row, next_col, steps + 1))
                    matrix[next_row][next_col] = steps + 1
        
        return matrix