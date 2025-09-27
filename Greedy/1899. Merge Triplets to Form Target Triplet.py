class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        #allocate a array result of false values with length equal to target list
        result = [False] * len(target)

        for x, y, z in triplets:
            if x == target[0] and y <= target[1] and z <= target[2]:
                result[0] = True
            
            if y == target[1] and x <= target[0] and z <= target[2]:
                result[1] = True
            
            if z == target[2] and x <= target[0] and y <= target[1]:
                result[2] = True
        
        return result[0] and result[1] and result[2]