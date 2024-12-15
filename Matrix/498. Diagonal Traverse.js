/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) 
{
    if(mat === null || mat.length === 0)
        return [];

    // Variables to track the size of the matrix
    const R = mat.length;
    const C = mat[0].length;

    // Resultant array and index to fill
    const result = new Array(R * C);
    let k = 0;

    // Temporary array to store diagonal elements
    let intermediate = [];

    // Iterate through all diagonals
    for (let d = 0; d < R + C - 1; d++) 
    {
        // Clear the intermediate array for the current diagonal
        intermediate = [];

        // Determine the starting row and column of the diagonal
        let r = d < C ? 0 : d - C + 1;
        let c = d < C ? d : C - 1;

        // Traverse the diagonal and collect elements
        while (r < R && c > -1) 
        {
            intermediate.push(mat[r][c]);
            r++;
            c--;
        }

        // Reverse the order of elements for even diagonals
        if (d % 2 === 0)
            intermediate.reverse();

        // Add the diagonal elements to the result array
        for (let i = 0; i < intermediate.length; i++) {
            result[k++] = intermediate[i];
        }
    }

    return result;
};