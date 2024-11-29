/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) 
{
    //Ignore single dots
    //Double dots pop the stack only if we do not go out of root directory
    let stack = [];

    //Split the path into array of components
    let components = path.split('/');

    for(let component of components)
    {
        if(component === '' || component === '.')
            continue;
        else if(component ==='..')
        {
            if(stack.length > 0)//to check we are not going beyond the root directory
                stack.pop();
        }
        else
            stack.push(component);
    }
    //Join the stack members to a path
    return "/"+stack.join('/');
};