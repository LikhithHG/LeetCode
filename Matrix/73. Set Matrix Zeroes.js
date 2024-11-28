/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) 
{
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;
    //Check if there are zeroes in first row and column
    for(let i = 0; i < rows; i++)
    {
        if(matrix[i][0] === 0)
            firstColZero = true;
    }
    for(let i = 0; i < cols; i++)
    {
        if(matrix[0][i] === 0)
            firstRowZero = true;
    }
    //check the elements and use first row and col as markers
    for(let i = 1; i < rows; i++)
    {
        for(let j = 1; j < cols; j++)
        {
            if(matrix[i][j] === 0)
            {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    //Update the matrix using the row and column markers
    for(let i = 1; i < rows; i++)
    {
        for(let j = 1; j < cols; j++)
        {
            if(matrix[i][0] === 0 || matrix[0][j] === 0)
                matrix[i][j] = 0;
        }
    }

    //Make the first row and first column if needed
    if (firstColZero) 
    {
        for (let i = 0; i < rows; i++)
            matrix[i][0] = 0;
    }

    if (firstRowZero) 
    {
        for (let j = 0; j < cols; j++)
            matrix[0][j] = 0;
    }
};