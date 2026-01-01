class Solution:
    def maxSum(self, grid: List[List[int]]) -> int:
        count = 0
        n = len(grid)
        m = len(grid[0])

        for i in range(1, n-1):
            for j in range(1, m-1): 
                val = grid[i][j] + grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1] + grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1]
                count = max(count, val) 
                            
        return count