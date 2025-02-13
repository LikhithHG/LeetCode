/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {

    let intervalProgress = null;
    let argsToProcess = null;

    const intervalFunction = () => {
        if(argsToProcess === null)
        {
            //Waiting stage
            clearInterval(intervalProgress);
            intervalProgress = null;
        } 
        else
        {
            fn(...argsToProcess);
            argsToProcess = null;
        }
    }
    
    return function throtted(...args) {
        if (intervalProgress) 
            argsToProcess = args;
        else 
        {
            fn(...args); // enter the looping phase
            intervalProgress = setInterval(intervalFunction, t);
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */