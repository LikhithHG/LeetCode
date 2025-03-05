/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) 
{
    let indegree = new Array(numCourses).fill(0);
    let adj = new Array(numCourses).fill(0).map(() => []);   

    //Build an adjacency list and calculate the indegree
    for(let [course, pre] of prerequisites)
    {
        adj[pre].push(course);
        indegree[course]++;
    }

    // Push all nodes with indegree 0 to the queue
    let queue = [];
    for (let i = 0; i < numCourses; i++) 
    {
        if (indegree[i] === 0)
            queue.push(i);
    }

    let order = [];
    //Check the queue with all nodes having 0 indegree
    while(queue.length > 0)
    {
        let node = queue.shift();
        order.push(node);

        //check all the neighbors of this node
        for(let neighbor of adj[node])
        {
            //we will decrement the indegree of the node
            indegree[neighbor]--;
            if(indegree[neighbor] === 0)
                queue.push(neighbor);
        }
    }
    return order.length === numCourses ? order : [];    
};