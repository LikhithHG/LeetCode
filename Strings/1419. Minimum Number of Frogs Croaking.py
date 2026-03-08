class Solution:
    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:
        char_counter = Counter()
        prevs = {
            'c': 'k',
            'r': 'c',
            'o': 'r',
            'a': 'o',
            'k': 'a',
        }

        for ch in croakOfFrogs:
            prev_ch = prevs[ch]

            if char_counter[prev_ch] > 0:
                char_counter[prev_ch] -= 1
                char_counter[ch] += 1

            elif ch == 'c':
                char_counter[ch] += 1
                
            else:
                return -1
            
        for ch, val in char_counter.items():
            if ch != 'k' and val > 0:
                return -1

        return char_counter['k']