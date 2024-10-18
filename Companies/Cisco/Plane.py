/*
A pilot was asked to drop food packets in a terrain. He must fly over the entire terrain only once but cover a maximum number of drop points. The points are given as inputs in the form of integer coordinates in a two Mimensional field.
The flight path can be horizontal or vertical, but not a mix of the two or diagonal.
Write an algorithm to find the maximum number of drop points that can be covered by flying over the terrain once.
Input
The first line of input consists of an integer- xCoordinate size, representing the number of x coordinates (NJ
The next line consists of N space-separated integers representing the x coordinates.
The third line consists of an integer-Coordinate size, representing the number of y coordinates (M).
The next line consists of M space-separated integers representing the y coordinates.

Output
Print an integer representing the number of coordinates in the best path which covers the maximum number of drop points by flying over the terrain once.
Note
A path is valid path if, more than one drop points are connected (Single coo dinate don't create any path, so pilot cannot fly over it).
Constraints
1 < N, M ≤ 700 (where N is always equal to M)
Example
Input:
5
23242
5
22658
Output:
3
*/
def max_drop_points_covered(n, x_coords, m, y_coords):
    # Dictionaries to count occurrences of each x and y coordinate
    x_count = {}
    y_count = {}
    
    # Count occurrences of each x coordinate
    for x in x_coords:
        if x in x_count:
            x_count[x] += 1
        else:
            x_count[x] = 1
    
    # Count occurrences of each y coordinate
    for y in y_coords:
        if y in y_count:
            y_count[y] += 1
        else:
            y_count[y] = 1
    
    # Find the maximum number of aligned drop points in either direction
    max_x_count = max(x_count.values(), default=0)
    max_y_count = max(y_count.values(), default=0)
    
    # The answer is the maximum of the max_x_count and max_y_count
    # If it's greater than 1, otherwise return 0 as no valid path exists
    max_drop_points = max(max_x_count, max_y_count)
    
    return max_drop_points if max_drop_points > 1 else 0

# Read input
n = int(input())
x_coords = list(map(int, input().split()))
m = int(input())
y_coords = list(map(int, input().split()))

# Calculate the result
result = max_drop_points_covered(n, x_coords, m, y_coords)

# Print the result
print(result)
