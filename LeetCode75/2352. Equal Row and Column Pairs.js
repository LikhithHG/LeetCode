/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) 
{
    let count = 0;
    let n = grid.length;
    let rowCounter = new Map();

    for(let row of grid)
    {
        let key = JSON.stringify(row);
        rowCounter.set(key, (rowCounter.get(key) || 0) + 1);
    }    
    // Check columns against stored row frequencies
    for (let c = 0; c < n; c++) 
    {
        let colArray = [];
        for (let r = 0; r < n; r++) 
            colArray.push(grid[r][c]);
        
        let key = JSON.stringify(colArray);
        count += rowCounter.get(key) || 0;
    }

    return count;
};