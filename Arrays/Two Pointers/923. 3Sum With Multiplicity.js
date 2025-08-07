/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) 
{
    const MOD = 1_000_000_007;
    const count = new Array(101).fill(0);

    // Count occurrences
    for (let x of arr) 
        count[x]++;

    // Get unique keys
    const keys = [];
    for (let i = 0; i <= 100; ++i) 
    {
        if (count[i] > 0) 
            keys.push(i);
    }

    let ans = 0;

    // Loop through all i, j, k where i <= j <= k
    for (let i = 0; i < keys.length; ++i) 
    {
        const x = keys[i];
        const T = target - x;
        let j = i, k = keys.length - 1;

        while (j <= k) 
        {
            const y = keys[j], z = keys[k];

            if (y + z < T) 
                j++;
            else if (y + z > T)
                k--;
            else 
            {
                // x + y + z == target
                if (i < j && j < k) 
                    ans += count[x] * count[y] * count[z];
                else if (i === j && j < k) 
                    ans += (count[x] * (count[x] - 1) / 2) * count[z];
                else if (i < j && j === k) 
                    ans += count[x] * (count[y] * (count[y] - 1) / 2);
                else if (i === j && j === k) 
                    ans += (count[x] * (count[x] - 1) * (count[x] - 2)) / 6;

                ans %= MOD;
                j++;
                k--;
            }
        }
    }

    return ans;
};