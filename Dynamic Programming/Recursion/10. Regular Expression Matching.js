/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 //Regular Expression Matching (Leetcode problem 10) is more specific and rule-driven, requiring handling of * as a modifier for the preceding element. In contrast, Wildcard Matching (Leetcode problem 44) is more general, with * matching any sequence of characters without restrictions.
 var isMatch = function(s, p) 
 {
     //s is the string and p is the pattern
     //Top Down Approach Memoization(DP) using recursion 
     //You can call the function dfs or the backtracking   
     const dp = new Map();
 
     function dfs(i ,j)
     {
         //i is for s and j is for p
         
         // Create a unique key for caching
         const key = `${i},${j}`; 
         //Check if the key is already in the map
         if (dp.has(key)) 
             return dp.get(key);
         
         //Base case 1: if both i and j are out of bounce then it is matching
         if(i >= s.length && j >= p.length)
             return true;
         //Base case 2: if i has reached the out of bound for s and j is still not reached out of bound that means that we cannot match at all
         if(j >= p.length)
             return false;
 
         //Is there a match between s[i] and p[j] or if p[j] is a period that means it matches to any character. Before this check if i is not out of bounce
         let match = (i < s.length) && (s[i] === p[j] || p[j] === '.');
         //Does the following character in the pattern is a star, before that see if the following character is inbounce
         if(j + 1 < p.length && p[j + 1] === '*')
         {
             //we have two choices if there is a star
             //Choice 1: Do not use a star
             //Choice 2: Use the star only if there is a match between the characters
             const result = dfs(i, j + 2) || (match && dfs(i + 1, j));
             dp.set(key, result);
             return result; 
         }
         //If its a normal character match
         if(match)
         {
             const result = dfs(i + 1, j + 1);
             dp.set(key, result);
             return result; 
         }
         dp.set(key, false);
         return false;
     }
     return dfs(0, 0);
 };
 
 /*
     //s is the string and p is the pattern
     //Without using Top Down Approach Memoization(DP) using recursion - Brute Force
     //You can call the function dfs or the backtracking    
     function dfs(i ,j)
     {
         //i is for s and j is for p
         //Base case 1: if both i and j are out of bounce then it is matching
         if(i >= s.length && j >= p.length)
             return true;
         //Base case 2: if i has reached the out of bound for s and j is still not reached out of bound that means that we cannot match at all
         if(j >= p.length)
             return false;
 
         //Is there a match between s[i] and p[j] or if p[j] is a period that means it matches to any character. Before this check if i is not out of bounce
         let match = (i < s.length) && (s[i] === p[j] || p[j] === '.');
         //Does the following character in the pattern is a star, before that see if the following character is inbounce
         if(j + 1 < p.length && p[j + 1] === '*')
         {
             //we have two choices if there is a star
             //Choice 1: Do not use a star
             //Choice 2: Use the star only if there is a match between the characters
             return dfs(i, j + 2) || (match && dfs(i + 1, j));
         }
         //If its a normal character match
         if(match)
             return dfs(i + 1, j + 1);
         
         return false;
     }
     return dfs(0, 0);
 */