/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) 
{
const graph = new Map();

    // Step 1: Build the graph
    for (let i = 0; i < equations.length; i++) 
    {
        const [dividend, divisor] = equations[i];
        const quotient = values[i];

        if (!graph.has(dividend)) 
            graph.set(dividend, new Map());
        if (!graph.has(divisor)) 
            graph.set(divisor, new Map());

        graph.get(dividend).set(divisor, quotient);  // a / b = quotient
        graph.get(divisor).set(dividend, 1 / quotient);  // b / a = 1 / quotient
    }    

    // Step 2: Evaluate each query using DFS
    const dfs = (currNode, targetNode, accProduct, visited) => {
        if (!graph.has(currNode)) 
            return -1.0;
        if (currNode === targetNode) 
            return accProduct;

        visited.add(currNode);

        for (const [neighbor, value] of graph.get(currNode)) 
        {
            if (!visited.has(neighbor)) 
            {
                const result = dfs(neighbor, targetNode, accProduct * value, visited);
                if (result !== -1.0) 
                    return result;
            }
        }

        visited.delete(currNode);
        return -1.0;
    };

    const results = [];
    for (const [dividend, divisor] of queries) 
    {
        if (!graph.has(dividend) || !graph.has(divisor))
            results.push(-1.0);
        else if (dividend === divisor)
            results.push(1.0);
        else 
        {
            const visited = new Set();
            results.push(dfs(dividend, divisor, 1, visited));
        }
    }

    return results;
};