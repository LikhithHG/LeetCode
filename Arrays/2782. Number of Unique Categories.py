# Definition for a category handler.
# class CategoryHandler:
#     def haveSameCategory(self, a: int, b: int) -> bool:
#         pass
class Solution:
    def numberOfCategories(self, n: int, categoryHandler: Optional['CategoryHandler']) -> int:
        component = n

        for i in range(n):
            for j in range(i - 1, -1, -1):
                if categoryHandler.haveSameCategory(i, j):
                    component -= 1
                    break
        
        return component