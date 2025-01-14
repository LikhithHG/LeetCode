/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 //Regular Expression Matching (Leetcode problem 10) is more specific and rule-driven, requiring handling of * as a modifier for the preceding element. In contrast, Wildcard Matching (Leetcode problem 44) is more general, with * matching any sequence of characters without restrictions.
 var isMatch = function(s, p) 
 {
     const cache = new Map(); // Memoization map
 
     const dfs = (i, j) => {
         // Unique key for caching
         const key = `${i},${j}`; 
         if (cache.has(key)) 
             return cache.get(key);
 
         // Base cases
         // Case 1: Both strings are fully matched
         if (i === s.length && j === p.length) 
             return true; 
         //Case 2: Pattern exhausted but string is not
         if (j === p.length) 
             return false; 
 
         const match = i < s.length && (s[i] === p[j] || p[j] === '?');
 
         let result;
         // '*' matches empty sequence or any sequence
         if (p[j] === '*') 
             result = dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
 
         // Exact character match or '?'
         else if (match)
             result = dfs(i + 1, j + 1);
 
         // No match
         else
             result = false;
 
         cache.set(key, result);
         return result;
     };
 
     return dfs(0, 0);
 };
 
 /*
     Same as problem 10
     const cache = new Map(); // Use Map for memoization
 
     const dfs = (i, j) => {
         const key = `${i},${j}`; // Create a unique key for caching
         if (cache.has(key)) 
             return cache.get(key);
 
         // Base cases
         if (i >= s.length && j >= p.length) 
             return true; // Both string and pattern are fully matched
         if (j >= p.length) 
             return false; // Pattern is exhausted but string is not
 
         // Match single character or '?'
         const match = i < s.length && (s[i] === p[j] || p[j] === '?');
 
         if (p[j] === '*') 
         {
             // '*' matches empty sequence (dfs(i, j + 1)) or any sequence (dfs(i + 1, j))
             const result = dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
             cache.set(key, result);
             return result;
         }
 
         if (match) 
         {
             // Regular character match
             const result = dfs(i + 1, j + 1);
             cache.set(key, result);
             return result;
         }
 
         // No match
         cache.set(key, false);
         return false;
     }
     return dfs(0, 0);
 */