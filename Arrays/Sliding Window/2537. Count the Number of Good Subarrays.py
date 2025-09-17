class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        #1 same number: 0 pairs
        #2 same numbers: 1 pair
        #3 same numbers: 3 pair
        #4 same numbers: 6 pair
        n = len(nums)
        left = 0
        current_pairs = 0
        answer = 0
        counts = collections.defaultdict(int)

        for right in range(n):
            #Add the nums[right] to the window
            current_pairs += counts[nums[right]]
            counts[nums[right]] += 1

            #check if the pairs are equal or grater than the value of k
            while current_pairs >= k:
                answer += n - right

                #Remove from left if atleast k pairs are there
                counts[nums[left]] -= 1
                current_pairs -= counts[nums[left]]

                #increment left
                left += 1
        
        return answer
                
        