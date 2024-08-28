/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) 
{
    let map = new Map();
    let num = n;

    while(!map.has(num))
    {
        map.set(num, true);
        let res = 0;
        while(num > 0)
        {
            let unit = num % 10;
            res += unit * unit;
            num = Math.floor(num / 10);
        }

        if(res === 1)
            return true;

        num = res;
    }
    return false;
};