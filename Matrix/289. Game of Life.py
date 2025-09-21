class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rows, cols = len(board), len(board[0])
        directions = [(1, 0), (-1, 0), (1, 1), (-1, -1), (0, 1), (0, -1), (1, -1), (-1, 1)]

        #result = [[0] * cols for _ in range(rows)]
        #result = [[0 for _ in range(cols)] for _ in range(rows)]
        # [0] * n
        # [0 for _ in range(n)]
        # [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]]

        for row in range(rows):
            for col in range(cols):
                value = board[row][col]
                live_cell = 0
                for (dx, dy) in directions:
                    new_row, new_col = dx + row, dy + col
                    
                    if 0 <= new_row < rows and 0 <= new_col < cols and board[new_row][new_col] % 2:
                        live_cell += 1

                if (value % 2 and 2 <= live_cell <= 3) or (not value % 2 and live_cell == 3):
                    board[row][col] += 2
        
        for row in range(rows):
            for col in range(cols):
                board[row][col] //= 2
        