/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) 
{
    try
    {
        // const [res1, res2] = await Promise.all([promise1, promise2]);
        // return res1 + res2;

        //return promise1.then((val) => promise2.then((val2) => val + val2))

        return await promise1 + await promise2;
    }
    catch(error)
    {
        console.error(error);
        throw error;
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */