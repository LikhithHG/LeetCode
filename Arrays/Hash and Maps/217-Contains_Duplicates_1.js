/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* Using Object/Hashtable
var containsDuplicate = function(nums) 
{
    //Create hash table or a object, key-value pairs
    let hashTable = {};

    for (let i = 0; i < nums.length; i++)
    {
        let n = nums[i];

        //we will add the element as key to hash table and the value as true indicating the element is already present

        if(hashTable[n])//if hashTable(n) is true
        {
            return true
        } 

        //Add the new element to hashtable
        hashTable[n] = true;
    }

    return false;
};
*/

//Using Map
var containsDuplicate = function(nums)
{
    //Create a new Map
    let map = new Map();

    for (let i = 0; i < nums.length; i++)
    {
        let n = nums[i];

        //If present return true
        if(map.has(n))
        {
            return true;
        }

        //add number to map using set function
        map.set(n, true);
    }
    return false;
}