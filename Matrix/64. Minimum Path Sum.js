/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) 
{
    let rows = grid.length;
    let cols = grid[0].length;

    // Base case for the first row
    for (let j = 1; j < cols; j++)
        grid[0][j] += grid[0][j - 1];

    // Base case for the first column
    for (let i = 1; i < rows; i++) 
        grid[i][0] += grid[i - 1][0];

    // Fill up the rest of the grid
    for (let i = 1; i < rows; i++) 
    {
        for (let j = 1; j < cols; j++) 
        {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    // The bottom-right corner contains the minimum path sum
    return grid[rows - 1][cols - 1];
};