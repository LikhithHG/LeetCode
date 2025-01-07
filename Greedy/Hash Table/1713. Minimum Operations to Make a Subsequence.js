/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
function binarySearch(arr, target) 
{
   let left = 0;
   let right = arr.length;
   while (left < right) 
   {
       const mid = Math.floor((left + right) / 2);

       if (arr[mid] < target)
           left = mid + 1;

       else
           right = mid;

   }
   return left;
}
var minOperations = function(target, arr) 
{
   //Step1: Map the elements of target to their indices of target array
   const targetIdxMap = new Map();
   for(let i = 0; i < target.length; i++)
       targetIdxMap.set(target[i], i);

   //Step 2: Filter arr and convert to indices in target
   const filteredIndices = [];
   for(let num of arr) 
   {
       if(targetIdxMap.has(num))
           filteredIndices.push(targetIdxMap.get(num));
   }  

    // Step 3: Find Largest increasing subsequence LIS in filteredIndices
   const lis = [];
   for(let idx of filteredIndices) 
   {
       const pos = binarySearch(lis, idx);

       if (pos === lis.length)
           lis.push(idx);
       else 
           lis[pos] = idx;
   }

   // Step 4: Calculate minimum operations
   return target.length - lis.length;
};