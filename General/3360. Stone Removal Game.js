/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) 
{
    //Last person to move
    let turn = 0;
    let move = 10;

    while(n >= move)
    {
        n -= move;
        turn += 1;
        move -= 1;
    }    

    return turn % 2 === 1;
};