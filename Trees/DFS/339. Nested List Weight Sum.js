/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) 
{
    //BFS
    const queue = [...nestedList];
    let depth = 1;
    let total = 0;
        
    while (queue.length > 0) 
    {
        const size = queue.length;
        for (let i = 0; i < size; i++) 
        {
            const nested = queue.shift();
            if(nested.isInteger())
                total += nested.getInteger() * depth;
            else
                queue.push(...nested.getList());
        }
        depth++;
    }
    return total;
};

/*
    //DFS
    function dfs(list, depth)
    {
        let total = 0;
        for(const nested of list) 
        {
            if (nested.isInteger())
                total += nested.getInteger() * depth;
            else
                total += dfs(nested.getList(), depth + 1);
        }
        return total;
    }

    return dfs(nestedList, 1);
*/