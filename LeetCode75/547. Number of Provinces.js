/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) 
{
    function dfs(node)
    {
        visit[node] = true;
        for(let i = 0; i < isConnected.length; i++)
        {
            if(isConnected[node][i] === 1 && !visit[i])
                dfs(i);
        }
    }

    let n = isConnected.length;
    let numOfComponents = 0;
    let visit = new Array(n).fill(false);

    for(let i = 0; i < n; i++)
    {
        if(!visit[i])
        {
            numOfComponents += 1;
            dfs(i);
        }
    }
    return numOfComponents;
};