class Solution:
    def minSwaps(self, s: str) -> int:
        #stack = []
        stackSize = 0
        unbalanced = 0

        for ch in s:
            if ch == '[':
                #stack.append(ch)
                stackSize += 1
            
            else:
                if stackSize > 0:
                    #stack.pop()
                    stackSize -= 1
                # else:
                #     unbalanced += 1
        
        return (stackSize + 1) // 2