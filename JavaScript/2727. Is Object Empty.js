/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // if (JSON.stringify(obj).length <= 2) 
    //     return true
    // else 
    //     return false

    // for (const _ in obj) 
    //     return false;
    // return true;

    return Object.keys(obj).length === 0;
};