/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) 
{
    //Do not think about the empty values
    //Check for only the values that are filled
    //3 hash sets for each row, each column and each small square
    //Use integer division method to find the index of the squares for row and column
    rows = Array.from({length: 9}, () => new Set());
    cols = Array.from({length: 9}, () => new Set());
    boxes = Array.from({length: 9}, () => new Set()); 

    //Iterate over the grid
    for(let r = 0; r < 9; r++)
    {
        for(let c = 0; c < 9; c++)
        {
            let num = board[r][c];
            let boxNum = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if(num === ".")
                continue; //skip the empty cells
            if(rows[r].has(num) || cols[c].has(num) || boxes[boxNum].has(num))
                return false;
            
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxNum].add(num);
        }
    }
    return true;
};