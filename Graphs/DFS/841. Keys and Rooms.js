/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) 
{
    let seen = new Array(rooms.length).fill(false);
    seen[0] = true;
    //We will store the keys that are not used in the stack
    let stack = [0];

    while(stack.length > 0)
    {
        let node = stack.pop();
        for(let key of rooms[node])
        {
            if(!seen[key])
            {
                seen[key] = true;
                stack.push(key);
            }
        }
    }
    for(let value of seen)
    {
        if(!value)
            return false;
    }
    return true;
};