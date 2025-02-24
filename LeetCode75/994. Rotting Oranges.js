/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) 
{
    let queue = [];
    let freshOranges = 0;
    let rows = grid.length, cols = grid[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    // Step 1: Build the initial set of rotten oranges
    for (let r = 0; r < rows; r++) 
    {
        for (let c = 0; c < cols; c++) 
        {
            if (grid[r][c] === 2) 
                queue.push([r, c]);
            else if (grid[r][c] === 1)
                freshOranges++;
        }
    }

    if(freshOranges === 0)
        return 0;

    let minutesElapsed = 0;

    while(queue.length > 0)
    {
        let size = queue.length;
        let rotted = false;
        for(let i = 0; i < size; i++)
        {
            let [row, col] = queue.shift();

            for(let [dRow, dCol] of directions)
            {
                let newRow = dRow + row;
                let newCol = dCol + col;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) 
                {
                    grid[newRow][newCol] = 2;
                    freshOranges--;
                    queue.push([newRow, newCol]);
                    rotted = true;
                }
            }
        }
        if(rotted)
            minutesElapsed += 1;
    }
    return freshOranges === 0 ? minutesElapsed : -1;
};