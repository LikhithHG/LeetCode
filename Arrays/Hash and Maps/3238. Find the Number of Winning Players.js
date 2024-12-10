/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) 
{
    // Create a map to count the balls picked by each player for each color
    const playerColorCount = new Map();

    // Populate the map
    for (const [player, color] of pick) 
    {
        if (!playerColorCount.has(player)) 
        {
            playerColorCount.set(player, new Map());
        }
        const colorCount = playerColorCount.get(player);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
    }

    let winningPlayers = 0;

    // Check the winning condition for each player
    for (let i = 0; i < n; i++)
     {
        if (!playerColorCount.has(i)) continue;
        const colorCount = playerColorCount.get(i);
        for (const count of colorCount.values())
        {
            if (count >= i + 1) 
            {
                winningPlayers++;
                break; // A player wins if any color meets the condition
            }
        }
    }

    return winningPlayers;    
};