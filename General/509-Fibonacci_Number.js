/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) 
{
    let fibonacci = [0, 1];

    for(i = 2; i <= n; i++)
    {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci[n];
};