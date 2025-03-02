/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) 
{
    const neighbors = [0, 1, -1];
    const rows = board.length;
    const cols = board[0].length;

    //Iterate over the board
    for(let row = 0; row < rows; row++)
    {
        for(let col = 0; col < cols; col++)
        {
            // Count the number of live neighbors
            let liveNeighbors = 0;

            for (let i = 0; i < 3; i++) 
            {
                for (let j = 0; j < 3; j++) 
                {

                    if (!(neighbors[i] === 0 && neighbors[j] === 0)) 
                    {
                        let r = row + neighbors[i];
                        let c = col + neighbors[j];

                        // Check if the neighboring cell is valid and was originally live
                        if (r >= 0 && r < rows && c >= 0 && c < cols && Math.abs(board[r][c]) === 1) 
                            liveNeighbors += 1;

                    }
                }
            }
            // Rule 1 or Rule 3: Any live cell with <2 or >3 live neighbors dies
            if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) 
                board[row][col] = -1; // -1 signifies it was originally live but now dead

            // Rule 4: Any dead cell with exactly 3 live neighbors becomes a live cell
            if (board[row][col] === 0 && liveNeighbors === 3) 
                board[row][col] = 2; // 2 signifies it was originally dead but now live
            
        }
    }
    // Convert temporary values (-1 and 2) back to 0 and 1
    for (let row = 0; row < rows; row++) 
    {
        for (let col = 0; col < cols; col++) 
            board[row][col] = board[row][col] > 0 ? 1 : 0;
    }
};