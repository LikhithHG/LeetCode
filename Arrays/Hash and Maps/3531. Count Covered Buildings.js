/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) 
{
    const rows = new Map();
    const cols = new Map();

    // Store all buildings row-wise and column-wise
    for (const [x, y] of buildings) 
    {
        if (!rows.has(x)) 
            rows.set(x, []);
        
        if (!cols.has(y)) 
            cols.set(y, []);
        
        rows.get(x).push(y);
        cols.get(y).push(x);
    }

    // Sort each row and column list
    for (const y_list of rows.values()) 
        y_list.sort((a, b) => a - b);

    for (const x_list of cols.values()) 
        x_list.sort((a, b) => a - b);
    
    let count = 0;
    // Check each building
    for (const [x, y] of buildings) 
    {
        const row = rows.get(x);
        const col = cols.get(y);

        // Find the position of the current building in row and column using binary search
        const idx_row = lowerBound(row, y);
        const idx_col = lowerBound(col, x);

        const left = idx_row > 0;
        const right = idx_row < row.length - 1;
        const above = idx_col > 0;
        const below = idx_col < col.length - 1;

        // If there are buildings on all four sides, increment the counter
        if (left && right && above && below) 
            count++;
    }

    return count;
};

// Helper function for lower_bound (binary search)
function lowerBound(arr, target) 
{
    let left = 0, right = arr.length;
    while (left < right) 
    {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) 
            left = mid + 1;
        else 
            right = mid;
    }
    return left;
}