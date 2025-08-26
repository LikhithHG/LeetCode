/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) 
{
    // Sorting the positions
    position.sort((a, b) => a - b);

    let low = 1;
    let high = Math.ceil(position[position.length - 1] / (m - 1.0));
    let answer = 0;

    // Binary search for the maximum distance
    while (low <= high) 
    {
        let mid = Math.floor((low + high) / 2);

        if (canPlaceBalls(mid, position, m)) 
        {
            answer = mid;
            low = mid + 1;
        } 
        else 
            high = mid - 1;
    }

    return answer;
};

function canPlaceBalls(x, position, m) 
{
    let prevBallPos = position[0];
    let ballsPlaced = 1;

    for (let i = 1; i < position.length && ballsPlaced < m; ++i) 
    {
        let currPos = position[i];
        if (currPos - prevBallPos >= x) 
        {
            ballsPlaced += 1;
            prevBallPos = currPos;
        }
    }
    return ballsPlaced === m;
}