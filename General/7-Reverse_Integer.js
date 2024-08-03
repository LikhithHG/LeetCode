/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n, reversed = 0
    if(x < 0)
    {
        n = x * -1
    }
    else
    {
        n = x
    }

    while(n > 0)
    {
        let unit = n % 10
        reversed = reversed * 10 + unit
        n = Math.floor(n/10)
    }

    if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) 
    {
        return 0;
    }
    else
    {
        if(x < 0)
        {
            reversed = reversed * -1
        }
        return reversed
    }

};