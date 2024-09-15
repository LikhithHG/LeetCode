/**
 * @param {number} n
 * @return {boolean}

An integer n has exactly three divisors if and only if n is the square of a prime number. This is because:

The divisors of a number that is a perfect square of a prime number p are {1, p, 
𝑝
2
p 
2
 }.
For example:

𝑛
=
9
n=9: The divisors are {1, 3, 9}, which are three divisors.
𝑛
=
4
n=4: The divisors are {1, 2, 4}, which are three divisors.
If n is not a perfect square or is not the square of a prime number, it cannot have exactly three divisors.
 */
var isThree = function(n) 
{
   // Step 1: Check if n is a perfect square
    let sqrt = Math.sqrt(n);
    
    if (sqrt % 1 !== 0) 
    {
        // n is not a perfect square
        return false;
    }
    
    // Step 2: Check if sqrt is prime
    //let root = Math.floor(sqrt);
    return isPrime(sqrt); 
};

function isPrime(num) 
{
    if (num < 2) 
        return false;

    for (let i = 2; i * i <= num; i++)
    {
        if (num % i === 0) 
            return false;
    }
    return true;
}