class Solution:
    def prevPermOpt1(self, arr: List[int]) -> List[int]:
        n = len(arr)
        l = 0
        r = n - 1

        for i in range(n - 2, -1, -1):
            if arr[r] < arr[i]:
                l = i
                break
                
            else:
                r = i
        
        if r == 0:
            return arr
        
        for i in range(l + 1, n):
            if arr[l] > arr[i] and arr[i] > arr[r]:
                r = i
         
        arr[l], arr[r] = arr[r], arr[l]
        
        return arr