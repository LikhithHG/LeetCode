/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) 
{
    let rows = maze.length;
    let cols = maze[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Mark the entrance as visited since it's not an exit.
    let [startRow, startCol] = entrance;
    maze[startRow][startCol] = '+';

    // Start BFS from the entrance
    let queue = [[startRow, startCol, 0]];

    while(queue.length > 0)
    {
        let [currentRow, currentCol, currentDistance] = queue.shift();

        //Check the four possible directions
        for (let [dRow, dCol] of directions) 
        {
            let nextRow = currentRow + dRow;
            let nextCol = currentCol + dCol;

            // If there's an unvisited empty cell:
            if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && maze[nextRow][nextCol] === '.') 
            {
                // If this empty cell is an exit, return the distance + 1.
                if (nextRow === 0 || nextRow === rows - 1 || nextCol === 0 || nextCol === cols - 1) 
                    return currentDistance + 1;

                // Otherwise, mark it as visited and add it to the queue
                maze[nextRow][nextCol] = '+';
                queue.push([nextRow, nextCol, currentDistance + 1]);
            }
        }
    }   
    return -1; 
};