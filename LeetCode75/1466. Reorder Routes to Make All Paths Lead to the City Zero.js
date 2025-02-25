/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) 
{
    let count = 0;
    function dfs(node, parent)
    {
        //If current node has no neighbours
        if (!adjMap.has(node))
            return;

        // Iterate through all neighbors of the current node
        for (const [neighbor, sign] of adjMap.get(node)) 
        {
            // Check to prevent revisiting the immediate parent (to avoid loops)
            if (neighbor !== parent) 
            {
                // Add sign (1 or 0) to count:
                // sign = 1 means route points away and must be reordered
                // sign = 0 means the route is correctly oriented towards city 0
                count += sign;
                // Recursively visit the neighbor
                dfs(neighbor, node);
            }
        }
    }

    //Build adjacency list from the connections
    let adjMap = new Map();
    //original direction from -> to i.e u -> v
    for (const [u, v] of connections) 
    {
        if (!adjMap.has(u)) 
            adjMap.set(u, []);
        adjMap.get(u).push([v, 1]);// Edge needs reorder (away from city 0)
            
        //Edge is twords the city 0 no need to reorder
        if (!adjMap.has(v)) 
            adjMap.set(v, []);
        adjMap.get(v).push([u, 0]);
    }
    dfs(0, -1);
    return count;
};