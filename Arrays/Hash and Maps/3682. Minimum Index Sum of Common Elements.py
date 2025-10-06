class Solution:
    def minimumSum(self, nums1: List[int], nums2: List[int]) -> int:
        hashmap = defaultdict()
        answer = float('inf')

        for index1, num1 in enumerate(nums1):
            if num1 in hashmap:
                continue
            hashmap[num1] = index1
        
        for index2, num2 in enumerate(nums2):
            if num2 in hashmap:
                answer = min(answer, index2 + hashmap[num2])
        
        return -1 if answer == float('inf') else answer 