/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) 
{
    // let result = x;
    // let mask;
    // n--;

    // for(mask = 1; n > 0; mask <<= 1)
    // {
    //     if((mask & x) === 0)
    //     {
    //         result |= (n & 1) * mask;
    //         n >>= 1;
    //     }
    // }
    // return result;

     // Convert to BigInt for safe large-number handling
    let bn = BigInt(n - 1);   // We subtract 1 because x itself is the first number
    let bx = BigInt(x);
    let result = bx;
    let mask = 1n;

    // Loop through each bit position
    while (bn > 0n) {
        // Only consider bits that are 0 in x
        if ((bx & mask) === 0n) {
            // If the least significant bit of n is 1, set this bit in result
            if ((bn & 1n) === 1n) {
                result |= mask;
            }
            // Shift to the next bit in n
            bn >>= 1n;
        }
        // Move to the next bit position in mask
        mask <<= 1n;
    }

    // Return as Number if it's within safe range
    const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
    if (result <= MAX_SAFE) {
        return Number(result);
    }

    // Throw error if the number is too large for JS Number
    throw new TypeError(`${result} exceeds JavaScript safe integer limit`);
};

/*
    let result = x;

   while(--n > 0)
   {
        result = (result + 1) | x;
   }
   return result;
*/