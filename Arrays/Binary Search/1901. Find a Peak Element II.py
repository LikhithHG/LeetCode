class Solution:
    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
        m, n = len(mat), len(mat[0])
        l, r = 0, n - 1

        while l <= r:
            mid = (l + r) // 2
            
            # 1. Find the row with the maximum value in the current middle column
            max_row = 0
            for i in range(m):
                if mat[i][mid] > mat[max_row][mid]:
                    max_row = i
                    
            # 2. Check the left and right neighbors of this maximum element
            left_is_bigger = mid > 0 and mat[max_row][mid - 1] > mat[max_row][mid]
            right_is_bigger = mid < n - 1 and mat[max_row][mid + 1] > mat[max_row][mid]
            
            # 3. If neither neighbor is bigger, we found our peak!
            if not left_is_bigger and not right_is_bigger:
                return [max_row, mid]
            
            # 4. If the right neighbor is bigger, a peak MUST exist on the right
            elif right_is_bigger:
                l = mid + 1
                
            # 5. Otherwise, a peak MUST exist on the left
            else:
                r = mid - 1
                
        return []