class Solution:
    def rearrangeString(self, s: str, k: int) -> str:
        freqs = defaultdict(int)
        maxFreq = 0
        # Store the frequency and find the highest frequency
        for c in s:
            freqs[c] += 1
            maxFreq = max(maxFreq, freqs[c])
        mostChars = set()
        secondChars = set()
        # Identify characters with max and second-max frequencies
        for c in freqs:
            if freqs[c] == maxFreq:
                mostChars.add(c)
            elif freqs[c] == maxFreq - 1:
                secondChars.add(c)
        # Create maxFreq number of segments
        segments = ["" for _ in range(maxFreq)]
        for i in range(maxFreq):
            # Add all maxFreq characters
            for c in mostChars:
                segments[i] += c
            # Add all (maxFreq - 1) characters except the last segment
            if i < maxFreq - 1:
                for c in secondChars:
                    segments[i] += c
        segmentId = 0
        # Distribute remaining characters in round-robin fashion
        for c in freqs:
            if c in mostChars or c in secondChars:
                continue
            for _ in range(freqs[c]):
                segments[segmentId] += c
                segmentId = (segmentId + 1) % (maxFreq - 1)
        # Validate each segment except last should have at least k elements
        for i in range(maxFreq - 1):
            if len(segments[i]) < k:
                return ""
        # Join all segments
        return "".join(segments)