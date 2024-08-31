/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) 
{
    let i = num1.length - 1;
    let j = num2.length - 1; 

    let result = '';
    let carry = 0;

    while(i >= 0 || j >= 0 || carry > 0)
    {
        digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
        digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);  // Update carry for next iteration
        result = (sum % 10) + result;  // Add the current digit to the result
        
        i--;
        j--;
    }  
    return result;
};