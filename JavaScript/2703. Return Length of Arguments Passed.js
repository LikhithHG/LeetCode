/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) 
{
    //return args.length;
    let total = 0;
    for(let num of args)
        total += 1;
    return total;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */