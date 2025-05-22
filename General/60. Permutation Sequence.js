/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) 
{
    let factorials = new Array(n);
    let nums = ["1"];

    factorials[0] = 1;

    for(let i = 1; i < n; i++)
    {
        factorials[i] = factorials[i - 1] * i;
        nums.push((i + 1).toString());
    }

    --k;

    let output = "";

    for(let i = n - 1; i > -1; i--)
    {
        let idx = Math.floor(k / factorials[i]);
        k -= idx * factorials[i];
        output += nums[idx];
        nums.splice(idx, 1);
    }

    return output;
};