/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) 
{
    const A = dominoes.split('');
    const N = A.length;
    const forces = new Array(N).fill(0);

    // Left to right pass
    let force = 0;
    for (let i = 0; i < N; i++) 
    {
        if (A[i] === 'R') 
            force = N;
        else if (A[i] === 'L') 
            force = 0;
        else 
            force = Math.max(force - 1, 0);
        forces[i] += force;
    }

    // Right to left pass
    force = 0;
    for (let i = N - 1; i >= 0; i--) 
    {
        if (A[i] === 'L')
            force = N;
        else if (A[i] === 'R')
            force = 0;
        else
            force = Math.max(force - 1, 0);
        forces[i] -= force;
    }

    // Build result based on net force
    let result = '';
    for (let f of forces) 
        result += f > 0 ? 'R' : f < 0 ? 'L' : '.';

    return result;    
};