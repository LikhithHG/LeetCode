/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) 
{
    let triangle = [];

    for(i = 0; i < numRows; i++)
    {
        //Every row always start with 1
        let row = [1];

        //This loop runs only if there are multiple entries in the given row
        //At first when there is only one element this will not execute
        for(j = 1; j < i; j++)
        {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        //Here I am appending 1 to the last entry
        if(i > 0)
            row.push(1);
        
        triangle.push(row);
    }
    return triangle;
};