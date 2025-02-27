/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) 
{
    // const MOD = Math.pow(10, 9) + 7; 
    // const fCache = new Map();
    // const pCache = new Map();

    // function p(n)
    // {
    //     if (pCache.has(n)) 
    //         return pCache.get(n);
    //     let val;
    //     if (n === 2)
    //         val = 1;
    //     else
    //         val = (p(n - 1) + f(n - 2)) % MOD;
    //     pCache.set(n, val);
    //     return val;
    // }  
    // function f(n)
    // {
    //     if (fCache.has(n)) 
    //         return fCache.get(n);
    //     let val;
    //     if (n === 1)
    //         val = 1;
    //     else if(n === 2)
    //         val = 2;
    //     else
    //         val = (f(n - 1) + f(n - 2) + 2 * p(n - 1)) % MOD;
    //     fCache.set(n, val);
    //     return val;
    // }  
    // return f(n);  

    const MOD = Math.pow(10, 9) + 7;
    if(n <= 2)
        return n;
    
    let fPrevious = 1n;
    let fCurrent = 2n;
    let pCurrent = 1n;

    for (let k = 3; k <= n; k++) 
    {
        let temp = fCurrent;
        fCurrent = (fCurrent + fPrevious + 2n * pCurrent) % BigInt(MOD);
        pCurrent = (pCurrent + fPrevious) % BigInt(MOD);
        fPrevious = temp;
    }

    return Number(fCurrent);
};