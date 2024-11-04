/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) 
{
    // Parse the real and imaginary parts of num1
    let [a, b] = num1.slice(0, -1).split('+').map(Number);
    // Parse the real and imaginary parts of num2
    let [c, d] = num2.slice(0, -1).split('+').map(Number);

    // Apply the formula (ac - bd) for the real part
    let realPart = a * c - b * d;
    // Apply the formula (ad + bc) for the imaginary part
    let imaginaryPart = a * d + b * c;

    // Construct the result as a string
    return `${realPart}+${imaginaryPart}i`;    
};