class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        hashmap = {}
        prefix = 0
        answer = 0
    
        for i in range(len(hours)):
            
            if hours[i] > 8:
                prefix += 1
            else:
                prefix -= 1
                
            if prefix > 0:
                answer = i + 1
            else:
                if prefix - 1 in hashmap:
                    answer = max(answer, i - hashmap[prefix - 1])
            
            if prefix not in hashmap:
                hashmap[prefix] = i
        
        return answer