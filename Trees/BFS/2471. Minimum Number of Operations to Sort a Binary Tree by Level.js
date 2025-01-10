/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) 
{
    let queue = [root];
    let totalSwaps = 0;

    while(queue.length > 0)
    {
        let levelSize = queue.length;
        let levelValues = Array(levelSize);

        for(let i = 0; i < levelSize; i++)
        {
            let node = queue.shift();
            levelValues[i] = node.val;

            if(node.left)
                queue.push(node.left);

            if(node.right)
                queue.push(node.right);
        }
        totalSwaps += getMinSwaps(levelValues);
    }
    return totalSwaps;
};
var getMinSwaps = function(arr)
{
    let swaps = 0;
    const targetArray = [...arr];
    //const targetArray = Array.from(arr);
    targetArray.sort((a, b) => a - b);

    let positionMap = new Map();
    for(let i = 0; i < arr.length; i++)
        positionMap.set(arr[i], i);
    
    //For each position swap until correct values are in place
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== targetArray[i])
        {
            swaps += 1;
            //Get the current position from the unsorted array Map of ith element using the sorted target array
            let currentPos = positionMap.get(targetArray[i]);
            //Update the map 
            positionMap.set(arr[i], currentPos);
            //Swapping in the original array
            arr[currentPos] = arr[i]; 
        }
    }
    return swaps;
}