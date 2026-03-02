class Solution:
    def numTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        fd = defaultdict(int)

        for n in nums1:
            fd[n ** 2] += 1

        sd = defaultdict(int)

        for n in nums2:
            sd[n ** 2] += 1

        print(fd, sd)
        ans = 0

        for i in range(len(nums2)):
            for j in range(i + 1, len(nums2)):
                if nums2[i] * nums2[j] in fd:
                    ans += fd[nums2[i] * nums2[j]]

        for i in range(len(nums1)):
            for j in range(i + 1, len(nums1)):
                if nums1[i] * nums1[j] in sd:
                    ans += sd[nums1[i] * nums1[j]]
                    
        return ans