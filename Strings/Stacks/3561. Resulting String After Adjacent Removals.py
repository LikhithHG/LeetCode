class Solution:
    def resultingString(self, s: str) -> str:
        sb = []
        
        for ch in s:
            if sb:
                top = sb[-1]
                diff = abs(ord(top) - ord(ch))
                
                if diff == 1 or diff == 25:
                    sb.pop()
                    continue
                    
            sb.append(ch)
        
        return ''.join(sb)