'''
There is a set of N jars containing chocolates. Some of them may be empty. Determine the maximum number of chocolates Andrew can pick from the jars given that he cannot pick from jars next to each other.
Write an algorithm to find the maximum number of chocolates that can be picked from the jars in such a way that the chocolates are not picked from jars next to each other.

Input
The first line of input consists of an integer- numjars, representing the number of jars (N).
The next line consists of N space-separated integers representing the number of chocolates in each jar.
Output
Print the maximum number of chocolates that can be picked from the jars in such a way that the chocolates are not picked from jars next to each other
Constraints
1 < N <= 1000
Example
Input:
6
5 30 99 60 5 10

Output:
114

'''

#Same as house Robber

def max_chocolates(num_jars, chocolates):
    if num_jars == 1:
        return chocolates[0]
    
    # Initialize the dp array
    dp = [0] * num_jars
    dp[0] = chocolates[0]
    dp[1] = max(chocolates[0], chocolates[1])
    
    # Fill the dp array based on the relation
    for i in range(2, num_jars):
        dp[i] = max(dp[i-1], chocolates[i] + dp[i-2])
    
    # The last element in dp array will have the result
    return dp[num_jars - 1]

# Read input
num_jars = int(input())
chocolates = list(map(int, input().split()))

# Calculate and print the result
result = max_chocolates(num_jars, chocolates)
print(result)

