/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) 
{
    /*
    Key Observation:
    In each match, one team is eliminated.
    Since the tournament is knockout-style, every match reduces the number of teams by 1.
    This means that to determine the winner, n - 1 teams must be eliminated.
    Therefore, the total number of matches required to eliminate n - 1 teams is simply n - 1.
    */    
    return n - 1;
};