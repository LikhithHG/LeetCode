/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) 
{
    //Using a array to convert a Linked list to an array and then iterating
    let answer = [];
    let stack = [];
    let index = 0;

    while(head)
    {
        // Default value for the current node's next greater value
        answer.push(0);

        while (stack.length > 0 && head.val > stack[stack.length - 1][1]) 
        {
            const [id] = stack.pop(); // Get the index of the node whose next greater value is found
            answer[id] = head.val;   // Update the result array
        }

        // Push the current index and value onto the stack
        stack.push([index++, head.val]);

        // Move to the next node
        head = head.next;
    }

    return answer;
};

/*
Using a array to convert a Linked list to an array and then iterating
    
    const values = []; // Store the values of the linked list
    let current = head;

    // Step 1: Convert the linked list to an array
    while (current !== null) 
    {
        values.push(current.val);
        current = current.next;
    }

    const n = values.length;
    const result = new Array(n).fill(0); // Initialize the result array with 0
    const stack = []; // Monotonic decreasing stack to store indices

    // Step 2: Traverse the values array
    for (let i = 0; i < n; i++) 
    {
        // Update result for indices whose next greater value is found
        while (stack.length > 0 && values[stack[stack.length - 1]] < values[i]) 
        {
            const index = stack.pop();
            result[index] = values[i];
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    // Step 3: Remaining indices in the stack have no greater value, result is already 0
    return result;  
*/