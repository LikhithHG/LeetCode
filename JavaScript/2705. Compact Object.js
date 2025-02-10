/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) 
{
    function dfs(obj)
    {
        if(!obj)
            return false;
        if(typeof obj !== 'object')
            return obj;
        
        //If the array
        if(Array.isArray(obj))
        {
            const newArray = [];
            for(let i = 0; i < obj.length; i++)
            {
                const current = obj[i];
                const subResult = dfs(current);

                if(subResult)
                    newArray.push(subResult);
            }
            return newArray;
        }

        const newObject = {};
        for (const key in obj) 
        {
            const subResult = dfs(obj[key])
            if (subResult) 
                newObject[key] = subResult;
        }
        return newObject;
    }
    return dfs(obj);   
};