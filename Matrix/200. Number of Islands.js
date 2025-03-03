/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) 
{
    //finding number of connected components
    if(!grid || grid.length === 0)
        return 0;

    let rows = grid.length;
    let cols  = grid[0].length;
    let numOfIslands  = 0;

    for(let r = 0; r < rows; r++)
    {
        for(let c = 0; c < cols; c++)
        {
            if(grid[r][c] === '1')
            {
                numOfIslands++;
                grid[r][c] = '0'; //mark as visited
                const queue = [r * cols + c]; // Queue to store 1D index of the grid
                
                while (queue.length > 0) 
                {
                    let id = queue.shift(); // Dequeue first element
                    //convert 1D to 2D indexes
                    let row = Math.floor(id / cols); 
                    let col = id % cols;

                    // Check all 4 directions: Up, Down, Left, Right
                    if (row - 1 >= 0 && grid[row - 1][col] === '1') 
                    {
                        queue.push((row - 1) * cols + col);
                        grid[row - 1][col] = '0'; // Mark as visited
                    }
                    if (row + 1 < rows && grid[row + 1][col] === '1') 
                    {
                        queue.push((row + 1) * cols + col);
                        grid[row + 1][col] = '0'; // Mark as visited
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === '1') 
                    {
                        queue.push(row * cols + (col - 1));
                        grid[row][col - 1] = '0'; // Mark as visited
                    }
                    if (col + 1 < cols && grid[row][col + 1] === '1') 
                    {
                        queue.push(row * cols + (col + 1));
                        grid[row][col + 1] = '0'; // Mark as visited
                    }
                }
            }
        }
    }
    return numOfIslands;
};