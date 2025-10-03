class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)
        answer = 1
        pivot = 0

        def compare(value1, value2):
            if value1 == value2:
                return 0
            elif value1 < value2:
                return -1
            else:
                return 1

        for i in range(1, n):
            cmp = compare(arr[i - 1], arr[i])
            if cmp == 0: 
                pivot = i
            elif i == n - 1 or cmp * compare(arr[i], arr[i + 1]) != -1:
                answer = max(answer, i - pivot + 1)
                pivot = i
        
        return answer