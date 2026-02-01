class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # Store the index corresponding to the value in nums2
        value_to_pos = {}
        for i in range(len(nums2)):
            value_to_pos[nums2[i]] = i

        # Build the anagram mappings
        mappings = [0] * len(nums1)
        for i in range(len(nums1)):
            mappings[i] = value_to_pos[nums1[i]]

        return mappings