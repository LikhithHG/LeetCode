/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) 
{
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    
    // Start from the top-right corner of the matrix
    let row = 0;
    let col = cols - 1;
    
    while (row < rows && col >= 0) 
    {
        if (grid[row][col] < 0) 
        {
            // If the current element is negative, all elements below are also negative
            count += (rows - row);
            col--; // Move to the left
        } 
        else 
        {
            row++; // Move down to the next row
        }
    }
    
    return count;
};