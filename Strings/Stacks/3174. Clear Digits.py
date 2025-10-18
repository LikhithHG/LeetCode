class Solution:
    def clearDigits(self, s: str) -> str:
        # answer = []
        # for char in s:
        #     if char.isdigit():
        #         answer.pop()
        #     else:
        #         answer.append(char)
        
        # return ''.join(answer)

        answerLen = 0
        s = list(s)

        for index in range(len(s)):
            if s[index].isdigit():
                answerLen -= 1
            
            else:
                s[answerLen] = s[index]
                answerLen += 1
        
        s = s[:answerLen]

        return ''.join(s)