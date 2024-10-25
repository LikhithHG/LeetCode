/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) 
{
    //a number has 4 divisors if it is a product of 2 distinct prime numbers
    let totalSum = 0;

    function findFour(n)
    {
        let divisors = new Set();
        for(let i = 1; i * i <= n; i++)
        {
            if(n % i === 0)
            {
                divisors.add(i);
                divisors.add(n / i);
            }
            if(divisors.size > 4)
                return 0;
        }
        if(divisors.size === 4)
                return Array.from(divisors).reduce((acc, num) => acc + num, 0);

        return 0;
    }

    for(let num of nums)
        totalSum += findFour(num);

    return totalSum;
};