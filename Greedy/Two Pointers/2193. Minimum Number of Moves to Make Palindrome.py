class Solution:
    def minMovesToMakePalindrome(self, s: str) -> int:
        s = list(s)
        result = 0

        while(s):
            # Find the first occurrence of the last character
            i = s.index(s[-1])

            # Case: The character is unique (the center of the palindrome)
            # logic: Number of swaps to move this to the middle
            if i == len(s) - 1:
                result += i // 2
            
            # Case: A matching pair exists
            # logic: cost to move the matching char to the left boundary
            else:
                result += i
                s.pop(i)

            # Remove the matching character
            s.pop()
        
        return result