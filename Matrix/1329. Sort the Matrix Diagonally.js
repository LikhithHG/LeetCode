/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) 
{
    let y = mat.length;
    let x = mat[0].length - 1
	for (let i = 2 - y; i < x; i++) 
    {   
        // Start far enough to the left to get
        let diag = new Array(y);
        // all non-singleton diagonals
        let k = 0;         
        for (let j = 0; j < y; j++)
        {
            if(mat[j][i+j]) 
                diag[k++] = mat[j][i+j]   // Only store valid cell values in the array
        }
        // Sort the diagonal and reset its index
        diag.sort((a,b) => a - b);
        k = 0;    
        for (let j = 0; j < y; j++)
        {
            if(mat[j][i+j]) 
                mat[j][i+j] = diag[k++]   // Replace the diagonal cells in sorted order
        }       
    }
    return mat    
};