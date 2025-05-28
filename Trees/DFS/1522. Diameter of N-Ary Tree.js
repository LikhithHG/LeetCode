/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node} root
 * @return {number}
 */
var diameter = function(root) 
{
    let maxDiameter = 0;

    function height(node) 
    {
        if (!node || !node.children || node.children.length === 0) 
            return 0;

        let max1 = 0, max2 = 0;

        for (let child of node.children) 
        {
            const h = height(child) + 1;

            if (h > max1) 
            {
                max2 = max1;
                max1 = h;
            } 
            else if (h > max2) 
                max2 = h;
        }

        // Update the global diameter
        maxDiameter = Math.max(maxDiameter, max1 + max2);

        return max1;
    }

    height(root);
    return maxDiameter;    
};