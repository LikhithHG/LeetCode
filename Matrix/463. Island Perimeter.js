/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) 
{
    const rows = grid.length;
    const cols = grid[0].length;
    
    let result = 0;

    for (let r = 0; r < rows; r++) 
    {
        for (let c = 0; c < cols; c++) 
        {
            if (grid[r][c] === 1) 
            {
                result += 4;

                if (r > 0 && grid[r - 1][c] === 1) 
                    result -= 2;

                if (c > 0 && grid[r][c - 1] === 1)
                    result -= 2;
            }
        }
    }

    return result;
};