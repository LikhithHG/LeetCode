/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) 
{
    //Bruteforce backtracking
    let rows = board.length;
    let cols = board[0].length;

    function backTrack(row, col, suffix)
    {
        if(suffix.length === 0)
            return true;
        
        if(row < 0 || row === rows || col < 0 || col === cols || board[row][col] !== suffix.charAt(0))
            return false;
        
        let ret = false;
        //Mark path before next exploration
        board[row][col] = '#';
        const directions = [[0, 1], [1, 0], [0, -1],[-1, 0],];

        for(let [rowOffSet, colOffSet] of directions)
        {
            ret = backTrack(row + rowOffSet, col + colOffSet, suffix.slice(1))
            if(ret)
                break;
        }
        //Clean up and return
        board[row][col] = suffix.charAt(0);
        return ret;
    }

    for(let row = 0; row < rows; row++)
    {
        for(let col = 0; col < cols; col++)
        {
            if(backTrack(row, col, word))
                return true;
        }
    }
    return false;
};