class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        arrival = []
        answer = 0

        for i in range(len(dist)):
            arrival.append(dist[i] / speed[i])
        
        arrival.sort()
        
        for i in range(len(arrival)):
            if arrival[i] <= i:
                break
            
            answer += 1
        
        return answer