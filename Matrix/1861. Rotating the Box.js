/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) 
{
    let m = boxGrid.length;
    let n = boxGrid[0].length;
    let result = Array.from({length : n}, () => Array.from(m).fill('.'));

    //Step 1: 90 degree rotation
    for(let i = 0; i < m; i++)
    {
        for(let j = 0; j < n; j++)
        {
            //Given a row what colum it becomes after rotation M-R-1
            result[j][m - 1 - i] = boxGrid[i][j];
        }
    }

    //Step 2: Apply gravity effect for each column
    for(let j = 0; j < m; j++)
    {
        let lowestRow = n - 1;
        for(let i = n - 1; i >= 0; i--)
        {
            if(result[i][j] === '#')
            {
                result[i][j] = '.';
                result[lowestRow][j] = '#';
                lowestRow--;
            }
            if(result[i][j] === '*')
                lowestRow = i - 1;
        }
    }
    return result;
};