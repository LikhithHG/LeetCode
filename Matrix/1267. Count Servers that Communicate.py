class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        communicableServers = 0

        for rowIndex in range(rows):
            rowCounts = 0
            serverColumnIndex = -1

            # Count the number of servers in the current row and record the
            # first server's column index.
            for colIndex in range(cols):
                if grid[rowIndex][colIndex] == 1:
                    if rowCounts == 0:
                        serverColumnIndex = colIndex
                    rowCounts += 1

            # If more than one server in the row, it can communicate
            canCommunicate = (rowCounts != 1)

            # If there's only one server in the row, check if there's a server
            # in the same column in another row.
            if not canCommunicate:
                for i in range(rows):
                    if i != rowIndex and grid[i][serverColumnIndex] == 1:
                        canCommunicate = True
                        break

            # If the server can communicate, add row_counts to the result.
            if canCommunicate:
                communicableServers += rowCounts

        return communicableServers  