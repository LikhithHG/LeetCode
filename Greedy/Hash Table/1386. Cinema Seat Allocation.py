class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        seats = collections.defaultdict(set)
        result = 0
        
        for i, j in reservedSeats:
            if j == 4 or j == 5:
                seats[i].add(0)
                seats[i].add(1)
            
            if j == 6 or j == 7:
                seats[i].add(1)
                seats[i].add(2)
            
            if j == 2 or j == 3:
                seats[i].add(0)
            
            if j == 8 or j == 9:
                seats[i].add(2)
        
        for i in seats:
            if len(seats[i]) == 2 or len(seats[i]) == 1:
                result += 1
            if len(seats[i]) == 3:
                result += 2
            
        return (2 * n) - result