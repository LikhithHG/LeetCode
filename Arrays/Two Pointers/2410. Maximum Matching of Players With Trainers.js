/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) 
{
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let player = 0;
    let trainer = 0;

    while(player < players.length && trainer < trainers.length)
    {
        if(trainers[trainer] >= players[player])
            player++;
        trainer++;
    }
    return player;
};