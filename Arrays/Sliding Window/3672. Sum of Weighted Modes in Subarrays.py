class Solution:
    def modeWeight(self, nums: List[int], k: int) -> int:
        freq = Counter(nums[:k])
        #create and assign to maxheap
        heapify((maxHeap := [(-f, e) for e,f in freq.items()]))

        result = 0

        for right in range(k, len(nums)):
            result += maxHeap[0][1] * freq[maxHeap[0][1]]
            freq[nums[right - k]] -= 1
            freq[nums[right]] += 1

            #Update if Mode has changed
            while maxHeap and freq[maxHeap[0][1]] != -maxHeap[0][0]:
                element = heappop(maxHeap)[1]
                if freq[element]:
                    heappush(maxHeap, (-freq[element], element))
            
            heappush(maxHeap, (-freq[nums[right]], nums[right]))
        
        return result + maxHeap[0][1] * freq[maxHeap[0][1]]