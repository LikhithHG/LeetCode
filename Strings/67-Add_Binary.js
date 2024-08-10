/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) 
{
    let result = "";
    let carry = 0; //Store the carry of the sum
    let i = a.length - 1;//last bit of string a
    let j = b.length - 1;//last bit of string b

    while(i >= 0 || j >= 0 || carry > 0)
    {
        //To find the current respective values of both the strings
        let digitA = (i >= 0 ? parseInt(a[i]) : 0);
        let digitB = (j >= 0 ? parseInt(b[j]) : 0);

        //To calculate vthe sum of the digits with carry
        let sum = digitA + digitB + carry;

        //Current digit in the sum
        result = (sum % 2) + result;

        //To calculate the carry
        carry = Math.floor(sum / 2);

        //To move to the next digit
        i--;
        j--;
    }
    return result;
};