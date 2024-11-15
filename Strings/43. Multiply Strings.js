/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) 
{
    if (num1 === "0" || num2 === "0") return "0";

    // Initialize result array
    const m = num1.length, n = num2.length;
    const result = Array(m + n).fill(0);

    // Multiply each digit
    for (let i = m - 1; i >= 0; i--) 
    {
        for (let j = n - 1; j >= 0; j--) 
        {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10; // Place current digit
            result[i + j] += Math.floor(sum / 10); // Carry to the next position
        }
    }

    // Convert result array to a string, skipping leading zeros
    while (result[0] === 0) 
        result.shift();
    return result.join('');    
};