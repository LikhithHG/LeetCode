/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) 
{
    // const returnObject = {};
    // for(const item of this)
    // {
    //     const key = fn(item);
    //     if (key in returnObject)
    //         returnObject[key].push(item);
    //     else
    //         returnObject[key] = [item];
    // }
    // return returnObject;    

    return this.reduce((accum, item) => {
        const key = fn(item);
        accum[key] ||= [];
        accum[key].push(item);
        return accum;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */