class Solution:
    def strWithout3a3b(self, a: int, b: int) -> str:
        ans = []

        while a or b:
            if len(ans) >= 2 and ans[-1] == ans[-2]:
                writeA = ans[-1] == 'b'

            else:
                writeA = a >= b

            if writeA:
                a -= 1
                ans.append('a')

            else:
                b -= 1
                ans.append('b')

        return "".join(ans)