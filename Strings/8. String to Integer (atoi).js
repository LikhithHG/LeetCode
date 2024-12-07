/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) 
{
    let sign = 1;
    let result = 0;
    let index = 0;
    let n = s.length;

    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    //Discard the white spaces in the begining
    while(index < n && s[index] === ' ')
        index++;
    
    //Check the sign of the number
    if(index < n && s[index] === '+')
    {
        sign = 1;
        index++;
    }
    else if(index < n && s[index] === '-')
    {
        sign = -1;
        index++;
    }

    //Traverse the digits and stop if it is not a digit
    while(index < n && s[index] >= '0' && s[index] <= '9')
    {
        let digit = s[index] - '0';

        //check the overflow and underflow condition
        if(result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10))
        {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = 10 * result + digit;
        index++;
    }
    return sign * result;
};