/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) 
{
    //Initialize the first row when i = 0
    let row = [1];

    //This runs when i is not equal to 0
    for(i = 1; i <= rowIndex; i++)
    {
        //Always the first entry is 1
        //In each iteration of i a new row will be created to keep track of values
        let newRow = [1];

        for(j = 1; j < i; j++)
        {
            newRow.push(row[j - 1] + row[j]);
        }

        // Always the last entry is again ends with 1
        newRow.push(1);
        
        // Set the new row as the current row once the iteration is about to complete
        row = newRow;
    }
    return row;
};